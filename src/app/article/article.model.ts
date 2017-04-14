export class Article {
  title: string;
  link: string;
  vote: number;

  constructor(title: string, link: string, vote?: number) {
    this.title = title;
    this.link = link;
    this.vote = vote || 0;

  }

  voteUp() {
    this.vote += 1;

  }
  voteDown() {
    this.vote -= 1;

  }
  domain(): string {
    try {
      // e.g. http://foo.com/path/to/bar
      const domainAndPath: string = this.link.split('//')[1];
      // e.g. foo.com/path/to/bar
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
