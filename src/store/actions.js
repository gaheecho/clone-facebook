export const WRITE_COMMENT = 'WRITE_COMMENT';
export const READ_COMMENTS = 'READ_COMMENTS';

export function writeComment(text) {
    return { type: WRITE_COMMENT,  text }
}

export function readComment(postNo) {
    return { type: READ_COMMENTS, postNo }
}