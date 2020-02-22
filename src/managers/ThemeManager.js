export default function ThemeManager(node) {
    this.makeUpdateTheme = theme => {
        return event => {
            node.setAttribute('data-theme', theme);
        };
    }
}