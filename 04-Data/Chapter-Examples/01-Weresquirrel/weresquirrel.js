let eventJournal = require('./journal');

function addEntry(events, squirrel) {
  eventJournal.push({
    events,
    squirrel
  });
}

function phi([n00, n01, n10, n11]) {
  return (
    (n11 * n00 - n10 * n01) /
    Math.sqrt(
      (n10 + n11) *
      (n00 + n01) *
      (n01 + n11) *
      (n00 + n10)
    ));
}

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let entry of journal) {
    let index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

function maxStrLength(strArr) {
  return Math.max(...strArr.map(str => str.length));
}

function padTwoStrings(str1, str2, padding) {
  return `${str1.padEnd(padding, " ")}${str2}`;
}

function printCorrelations(eventJournal) {
  let events = journalEvents(eventJournal);
  let padding = maxStrLength(events) + 3;
  for (let event of events) {
    let correlation = phi(tableFor(event, eventJournal));
    if (correlation > 0.1 || correlation < -0.1) {
      console.log(padTwoStrings(`${event}:`, correlation, padding));
    }
  }
}

for (let entry of eventJournal) {
  if (entry.events.includes("peanuts") &&
    !entry.events.includes("brushed teeth")) {
    entry.events.push("peanut teeth");
  }
}

printCorrelations(eventJournal);