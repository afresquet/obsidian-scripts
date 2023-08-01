// @ts-check

/**
 * @typedef {import("./types/dataview/api/inline-api").DataviewInlineApi} DataviewInlineApi
 * @typedef {import("./types/moment")} moment
 * @typedef {ReturnType<moment>} Moment
 *
 * @typedef {import("./types/person").Person} Person
 */

/**
 * @param {DataviewInlineApi} dv
 * @param {moment} moment
 * @returns {(title: string, start: Moment, end: Moment) => void}
 */
function createDrawBirthdays(dv, moment) {
  /**
   * @param {Moment} birthday
   * @param {Moment} start
   * @returns {Moment}
   */
  function nextBirthday(birthday, start) {
    const next = moment(birthday);
    next.year(start.year());
    if (next.isBefore(start, "day")) {
      next.add(1, "year");
    }
    return next;
  }

  /**
   * @param {Moment} birthday
   * @param {Moment} start
   * @returns {number}
   */
  function turns(birthday, start) {
    return nextBirthday(birthday, start).diff(birthday, "years");
  }

  /**
   * @param {Moment} start
   * @param {Moment} end
   * @returns {(person: Person) => boolean}
   */
  function filterBirthday(start, end) {
    return (person) => {
      const birthday = nextBirthday(moment(person.birthday.toString()), start);
      return birthday.isBetween(start, end, "days", "[)");
    };
  }

  /**
   * @param {string} title
   * @param {Moment} start
   * @param {Moment} end
   */
  return function drawBirthdays(title, start, end) {
    const birthdays = dv.pages('"people"').filter(filterBirthday(start, end));

    if (birthdays.length === 0) return;

    dv.header(2, title);
    dv.table(
      ["Person", "Birthday", "Turns"],
      birthdays.map((p) => {
        const birthday = moment(p.birthday.toString());
        return [
          p.file.link,
          birthday.format("dddd, MMMM DD"),
          turns(birthday.clone(), start),
        ];
      })
    );
  };
}

exports.createDrawBirthdays = createDrawBirthdays;
