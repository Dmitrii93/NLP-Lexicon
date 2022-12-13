import { Subheader } from '../components/Subheader';
import { useRoute } from '../contexts/RouteContext';
import { PartOfSpeech } from '../components/Features/PartOfSpeech';
import { parts as features } from '../mocks/MorphologicalFeatures.mock';
import { parts as deps } from '../mocks/MorphologicalDeps.mock';
import { parts as rules } from '../mocks/MorphologicalRules.mock';
import { DepsNouns } from '../components/Dependencies/DepsNouns';
import { DepsAdjectives } from '../components/Dependencies/DepsAdjectives';
import { DepsVerbs } from '../components/Dependencies/DepsVerbs';
import { RulesNouns } from '../components/Rules/RulesNouns';
import { RulesAdjectives } from '../components/Rules/RulesAdjectives';
import { RulesVerbs } from '../components/Rules/RulesVerbs';

export const Section = () => {
    const { route } = useRoute();
    const slug = route.split('/').slice(-1)[0];
    const section = route.split('/')[1];
    let parts;
    if (route.includes('features')) {
        parts = features;
    } else if (route.includes('dependencies')) {
        parts = deps;
    } else {
        parts = rules;
    }

    const part = parts[slug];
    return (
        <>
            <Subheader parts={Object.keys(parts)} section={section} />
            {section === 'features' && (
                <PartOfSpeech
                    part={part}
                    prev={Object.keys(parts)[Object.keys(parts).indexOf(slug) - 1]}
                    next={Object.keys(parts)[Object.keys(parts).indexOf(slug) + 1]}
                />
            )}
            {section === 'dependencies' && slug === 'nouns' && (
                <DepsNouns
                    part={part}
                    prev={Object.keys(parts)[Object.keys(parts).indexOf(slug) - 1]}
                    next={Object.keys(parts)[Object.keys(parts).indexOf(slug) + 1]}
                />
            )}
            {section === 'dependencies' && slug === 'adjectives' && (
                <DepsAdjectives
                    part={part}
                    prev={Object.keys(parts)[Object.keys(parts).indexOf(slug) - 1]}
                    next={Object.keys(parts)[Object.keys(parts).indexOf(slug) + 1]}
                />
            )}
            {section === 'dependencies' && slug === 'verbs' && (
                <DepsVerbs
                    part={part}
                    prev={Object.keys(parts)[Object.keys(parts).indexOf(slug) - 1]}
                    next={Object.keys(parts)[Object.keys(parts).indexOf(slug) + 1]}
                />
            )}
            {section === 'rules' && slug === 'nouns' && (
                <RulesNouns
                    part={part}
                    prev={Object.keys(parts)[Object.keys(parts).indexOf(slug) - 1]}
                    next={Object.keys(parts)[Object.keys(parts).indexOf(slug) + 1]}
                />
            )}
            {section === 'rules' && slug === 'adjectives' && (
                <RulesAdjectives
                    part={part}
                    prev={Object.keys(parts)[Object.keys(parts).indexOf(slug) - 1]}
                    next={Object.keys(parts)[Object.keys(parts).indexOf(slug) + 1]}
                />
            )}
            {section === 'rules' && slug === 'verbs' && (
                <RulesVerbs
                    part={part}
                    prev={Object.keys(parts)[Object.keys(parts).indexOf(slug) - 1]}
                    next={Object.keys(parts)[Object.keys(parts).indexOf(slug) + 1]}
                />
            )}
        </>
    );
};
