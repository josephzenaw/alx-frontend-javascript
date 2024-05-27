export default function createIteratorObject(report) {
  function* iterator() {
    for (let department in report.allEmployees) {
      const employees = report.allEmployees[department];
      for (let employee of employees) {
        yield employee;
      }
    }
  }

  return {
    [Symbol.iterator]: iterator
  };
}

