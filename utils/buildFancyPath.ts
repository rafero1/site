/**
 * Build a fancy path string from the given path
 * @param path the path to be converted
 * @param root the root path to be used
 * @returns the fancy path string
 */
export const buildFancyPath = (path: string, root: string = '/home/rafael'): string => {
    let pathString = root;

    if (path === "/") {
        pathString += "/hello_world.sh";
    } else {
        pathString += path.toLowerCase().replace("-", "_") + ".sh";
    }

    return pathString;
};
