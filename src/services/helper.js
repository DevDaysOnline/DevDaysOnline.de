

export function getDescription(description, content) {
    if (description) {
        return description;
    }
    if (content) {
        let position = content.indexOf('.');
        position = position > 0 ? position : 150;
            return content.substring(0, position);
    }
    return '';
}