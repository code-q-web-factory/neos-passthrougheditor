import manifest from '@neos-project/neos-ui-extensibility';
import PassthroughEditor from './PassthroughEditor';

manifest('CodeQ.PassthroughEditor:PassthroughEditor', {}, globalRegistry => {
    const editorsRegistry = globalRegistry.get('inspector').get('editors');
    editorsRegistry.set('CodeQ.PassthroughEditor/Inspector/Editors/PassthroughEditor', {
        component: PassthroughEditor
    });
});
