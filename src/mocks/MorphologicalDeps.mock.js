export const parts = {
    nouns: {
        number: {
            singular: {
                number: 0,
                case: '',
            },
            plural: {
                number: 0,
                case: '',
            },
        },
        case: {
            nominative: {
                number: '',
                case: 0,
            },
            genitive: {
                number: '',
                case: 0,
            },
        },
    },
    adjectives: {
        degree: {
            positive: { degree: 0 },
            comparative: { degree: 0 },
            superlative: { degree: 0 },
        },
    },
    verbs: {
        'person (agreement)': {
            1: { 'person (agreement)': 0, 'number (agreement)': '', tense: '', 'verb-form': '' },
            2: { 'person (agreement)': 0, 'number (agreement)': '', tense: '', 'verb-form': '' },
            3: { 'person (agreement)': 0, 'number (agreement)': '', tense: '', 'verb-form': '' },
        },
        'number (agreement)': {
            singular: { 'person (agreement)': '', 'number (agreement)': 0, tense: '', 'verb-form': '' },
            plural: { 'person (agreement)': '', 'number (agreement)': 0, tense: '', 'verb-form': '' },
        },
        tense: {
            present: { 'person (agreement)': '', 'number (agreement)': '', tense: 0, 'verb-form': '' },
            past: { 'person (agreement)': '', 'number (agreement)': '', tense: 0, 'verb-form': '' },
        },
        'verb-form': {
            infinitive: { 'person (agreement)': '', 'number (agreement)': '', tense: '', 'verb-form': 0 },
            gerund: { 'person (agreement)': '', 'number (agreement)': '', tense: '', 'verb-form': 0 },
            'past-participle': { 'person (agreement)': '', 'number (agreement)': '', tense: '', 'verb-form': 0 },
        },
    },
};
