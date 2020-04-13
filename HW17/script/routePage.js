export class RoutePage {
  constructor() {
    this.events = {};
  }

  publish(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((fn) => fn(data));
    }
  }

  subscribe(event, fn) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(fn);
  }
}
