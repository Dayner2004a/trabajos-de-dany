// radix normal

import { radixrouter} from 'radix3'

function handleroutes() {
    const router = new radixrouter();

    router.insert('/home', { handler: 'homeHandler'});
    router.insert('/about', {handler: 'abouthandler'});
    router.insert('/user/;id', {handler: 'userhandler'});

    const homeroute = router.lookup('/home');
    console.log(userRoute);
}

// Radix recursiva

import { radixrouter} from 'radix3';

function recursiveroutelookup(node, pathSegments, index = 0) {
    if (index === pathSegments.length) {
        return node;

    }

    const segment = pathSegments[index];

    if (!node.children) {
        return null;
    }

    if (node.children[segment]) {
        return recursiveroutelookup(node.children[segment], pathSegments, index + 1);
    }

    return null;
}

function recursiveRouteExample() {
    const roter = new radixrouter();

    router.insert()
}