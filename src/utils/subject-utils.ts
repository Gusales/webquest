function formatSubject(subject: string) {
    return subject.toLowerCase().replaceAll(" ", "-")
}

function replaceSubject(subject: string) {
    return subject.replaceAll("[subject]", formatSubject(subject))
}

export {
    formatSubject,
    replaceSubject
}
