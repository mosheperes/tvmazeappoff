export class Episodes {
  shownumber: number;
  episodename: string;
  aired: Date;

  constructor(args?) {
    this.shownumber = args.shownumber;
    this.episodename = args.episodename;
    this.aired = args.aired;
    }

  }

