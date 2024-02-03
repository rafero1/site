/**
 * Represents a project in the portfolio
 */
export interface IProject {
  /**
   * The title of the project
   */
  title: string;
  /**
   * A brief summary of the project
   */
  summary: string;
  /**
   * An array of paragraphs that describe the project
   */
  description?: string[];
  /**
   * An array of categories that the project belongs to
   */
  categories: string[];
  /**
   * The year the project was made
   */
  year: number;
  /**
   * The image to display
   */
  image: string;
  /**
   * The URL to the project
   */
  url?: string;
  /**
   * The label for the URL
   */
  urlLabel?: string;
  /**
   * The URL to the project's source code
   */
  gitUrl?: string;
}
