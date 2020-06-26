import React, { Component } from "react";

export default class TextScrambler extends Component {
  constructor(el, props) {
    super(props);
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
    this.queue = [];
    this.frame = 0;

    this.setText = (newText) => {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise((resolve) => (this.resolve = resolve));
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest);

      this.update();
      return promise;
    };
  }

  componentDidMount() {
    // words to be displayed
    var phrases = ["MORSE CODE LEARNING ACADEMY"];
    //   // word scrambler text
    var el = document.querySelector(".text");
    const fx = new TextScrambler(el);
    let counter = 0;
    this.next(phrases, el, fx, counter);
  }

  update = () => {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.7) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  };
  randomChar = () => {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  };

  next(phrases, el, fx, counter) {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 2500);
    });
    counter = (counter + 1) % phrases.length;
  }

  render() {
    return <div></div>;
  }
}
