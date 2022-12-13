export const parts = {
    nouns: {
        number: ['singular', 'dual', 'plural'],

        case: [
            'nominative',
            'genitive',
            'dative',
            'accusative',
            'vocative',
            'ablative',
            'locative',
            'instrumental',
            'subjective',
            'objective',
            'prepositional',
        ],
        gender: ['feminine', 'masculine', 'neuter', 'common', 'invariant'],

        animacy: ['yes/no'],

        affect: ['diminutive', 'augmentative'],

        definiteness: ['definite', 'indefinite', 'specific', 'nonspecific', 'generic'],

        deixis: ['proximal', 'distal', 'remote', 'near-speaker', 'near-hearer'],

        polarity: ['positive', 'negative'],

        proper: ['yes/no'],

        unit: ['yes/no'],
    },
    pronouns: {
        person: ['polite', 'familiar'],

        number: ['singular', 'dual', 'plural'],

        case: [
            'nominative',
            'genitive',
            'dative',
            'accusative',
            'vocative',
            'ablative',
            'locative',
            'instrumental',
            'subjective',
            'objective',
            'prepositional',
        ],

        gender: ['feminine', 'masculine', 'neuter', 'common', 'invariant'],

        animacy: ['yes/no'],

        deixis: ['proximal', 'distal', 'remote', 'near-speaker', 'near-hearer'],

        polarity: ['positive', 'negative'],

        function: ['demonstrative', 'relative', 'interrogative'],

        possessive: ['yes/no'],

        anaphora: ['reflexive', 'reciprocal'],

        type: [
            'personal',
            'indefinite',
            'expletive',
            'partitive',
            'locative',
            'propredicate',
            'zero',
            'referential',
            'emphatic',
            'demonstrative',
        ],

        'pro-form': ['disjunctive', 'conjunctive'],
    },
    adjectives: {
        number: ['singular', 'dual', 'plural'],

        case: [
            'nominative',
            'genitive',
            'dative',
            'accusative',
            'vocative',
            'ablative',
            'locative',
            'instrumental',
            'subjective',
            'objective',
            'prepositional',
        ],

        gender: ['feminine', 'masculine', 'neuter', 'common', 'invariant'],

        animacy: ['yes/no'],

        degree: ['positive', 'comparative', 'superlative'],

        polarity: ['positive', 'negative'],

        numeral: ['cardinal', 'ordinal'],

        pronominal: ['yes/no'],

        declension: ['strong', 'weak', 'long', 'short'],
    },
    articles: {
        number: ['singular', 'dual', 'plural'],

        case: [
            'nominative',
            'genitive',
            'dative',
            'accusative',
            'vocative',
            'ablative',
            'locative',
            'instrumental',
            'subjective',
            'objective',
            'prepositional',
        ],
        gender: ['feminine', 'masculine', 'neuter', 'common', 'invariant'],
        definiteness: ['definite', 'indefinite', 'specific', 'nonspecific', 'generic'],
    },
    verbs: {
        polarity: ['positive', 'negative'],
        person: ['polite', 'familiar'],

        number: ['singular', 'dual', 'plural'],

        case: [
            'nominative',
            'genitive',
            'dative',
            'accusative',
            'vocative',
            'ablative',
            'locative',
            'instrumental',
            'subjective',
            'objective',
            'prepositional',
        ],

        gender: ['feminine', 'masculine', 'neuter', 'common', 'invariant'],

        tense: [
            'present',
            'past',
            'future',
            'imperfect',
            'aorist',
            'future-aorist',
            'perfect',
            'pluperfect',
            'future-perfect',
        ],

        aspect: ['perfective', 'imperfective', 'progressive', 'durative'],

        voice: ['active', 'middle', 'passive', 'mediopassive'],

        mood: ['indicative', 'imperative', 'subjunctive', 'conditional'],

        'verb-form': [
            'finite',
            'infinitive',
            'gerund',
            'supine',
            'participle',
            'present-participle',
            'past-participle',
            'future-participle',
        ],

        'direct-object': ['yes/no'],
        'indirect-object': ['yes/no'],
        object: ['yes/no'],
        oblique: ['yes/no'],

        'verb-type': ['auxiliary', 'modal', 'lexical', 'copula'],

        reflexive: ['yes/no'],
    },
    adverbs: {
        degree: ['positive', 'comparative', 'superlative'],
        deixis: ['proximal', 'distal', 'remote', 'near-speaker', 'near-hearer'],
        polarity: ['positive', 'negative'],
        function: ['demonstrative', 'relative', 'interrogative'],
        directionality: ['static', 'dynamic'],
        type: ['locative', 'temporal', 'manner', 'quantity', 'contrast'],
    },
    prepositions: {
        directionality: ['static', 'dynamic'],
        polarity: ['positive', 'negative'],
    },
    coordinators: {
        polarity: ['positive', 'negative'],
    },
    subordinators: {
        polarity: ['positive', 'negative'],
    },
    particles: {
        directionality: ['static', 'dynamic'],
        polarity: ['positive', 'negative'],
    },
    interjections: {},
    punctuation: {
        orientation: ['open', 'close', 'matched', 'unary'],
    },
    other: {},
};
