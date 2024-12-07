export class WeightEntry {
  constructor(date, weight) {
    this.date = date;
    this.weight = weight;
  }
}

export class WeightTracker {
  constructor() {
    this.entries = [];
  }

  addEntry(weight) {
    const entry = new WeightEntry(new Date(), weight);
    this.entries.push(entry);
    this.entries.sort((a, b) => a.date - b.date);
  }

  getEntries() {
    return this.entries;
  }
}