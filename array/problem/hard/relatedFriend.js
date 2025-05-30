/**
@Find out from the list of students whose friend's roll number is also in the same list.

// List of students in the class
const studentList = [
  { roll: 101, name: 'Amin', friendRoll: 103 },
  { roll: 102, name: 'Barkat', friendRoll: 105 }, // friendRoll 105 is not in the list
  { roll: 103, name: 'Karim', friendRoll: 101 },
  { roll: 104, name: 'Jalil', friendRoll: null },  // No friendRoll
  { roll: 106, name: 'Monir', friendRoll: 107 },
  { roll: 107, name: 'Nasir', friendRoll: 106 }
];

*/

const studentList = [
  { roll: 101, name: "Amin", friendRoll: 103 },
  { roll: 102, name: "Ashis", friendRoll: 105 }, // friendRoll 105 is not in the list
  { roll: 103, name: "Pretom", friendRoll: 101 },
  { roll: 104, name: "Ankus", friendRoll: null }, // No friendRoll
  { roll: 106, name: "Dev", friendRoll: 107 },
  { roll: 107, name: "Vir", friendRoll: 106 },
];

// Those students whose friendRoll is also in the list
const studentsWhoseFriendsAreAlsoPresent = studentList.filter(
  (currentStudent, index, entireStudentList) => {
    // First, let's see if the current student has a friendRoll
    if (
      currentStudent.friendRoll === null ||
      currentStudent.friendRoll === undefined
    ) {
      // If there's no friendRoll, this student cannot be included according to our condition
      console.log(
        `Student "${currentStudent.name}" (Roll: ${currentStudent.roll}) has no friendRoll, so they are discarded.`
      );
      return false;
    }

    // Now we need to check if a student with the current student's friendRoll
    // exists in the entireStudentList.

    // We'll use the `some` method to check the entireStudentList.
    // It will search the entire list and return true if it finds a student whose roll matches the friendRoll.
    const isFriendPresent = entireStudentList.some(
      (otherStudent) => otherStudent.roll === currentStudent.friendRoll
    );
    if (isFriendPresent) {
      // If the student with the friendRoll is found in the list, the current student will be kept.
      console.log(
        `Student "${currentStudent.name}" (Roll: ${currentStudent.roll})'s friend (Roll: ${currentStudent.friendRoll}) is present in the list, so they are being kept.`
      );
      return true; // Keep this student
    } else {
      // If the student with the friendRoll is not found in the list, the current student will be discarded.
      console.log(
        `Student "${currentStudent.name}" (Roll: ${currentStudent.roll})'s friend (Roll: ${currentStudent.friendRoll}) is not present in the list, so they are discarded.`
      );
      return false; // Discard this student
    }
  }
);

console.log(studentsWhoseFriendsAreAlsoPresent);
