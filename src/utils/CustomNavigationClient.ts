import { NavigationClient, NavigationOptions } from "@azure/msal-browser";
import { History } from "history";

/**
 * Extending the default NavigationClient allows you to overwrite just navigateInternal while continuing to use the default navigateExternal function
 * If you would like to overwrite both you can implement INavigationClient directly instead
 */
export class CustomNavigationClient extends NavigationClient {
  private history: History;

  constructor(history: History) {
    super();
    this.history = history; // Passed in from useHistory hook provided by react-router-dom;
  }

  // This function will be called anytime msal needs to navigate from one page in your application to another
  // eslint-disable-next-line @typescript-eslint/require-await
  async navigateInternal(url: string, options: NavigationOptions): Promise<boolean> {
    // url will be absolute, you will need to parse out the relative path to provide to the history API
    const relativePath = url.replace(window.location.origin, "");
    if (options.noHistory) {
      this.history.replace(relativePath);
    } else {
      this.history.push(relativePath);
    }

    return false;
  }
}
