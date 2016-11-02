import {run} from '@cycle/xstream-run';
import {makeDOMDriver} from '@cycle/dom';
import {makeSHADriver} from './drivers/jsSHA';
import {main} from './pages/main';

const drivers = {
  DOM: makeDOMDriver('#app'),
  SHA: makeSHADriver()
};

run(main, drivers);
