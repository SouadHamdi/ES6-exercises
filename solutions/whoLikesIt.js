function likes(names) {
    const people = names.length;
    if (!people) {
      return 'no one likes this';
    }
    if (people === 1) {
      return `${names[0]} likes this`;
    }
    if (people === 2) {
      return `${names[0]} and ${names[1]} like this`;
    }
    if (people === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }
    if (people > 3) {
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
  }