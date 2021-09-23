
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(args: {name: string, description: string, imagePath: string}) {
    this.name = args.name;
    this.description = args.description;
    this.imagePath = args.imagePath;
  }
}
