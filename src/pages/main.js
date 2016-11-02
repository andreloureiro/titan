import {div} from '@cycle/dom';
import xs from 'xstream';
import sampleCombine from 'xstream/extra/sampleCombine';
import MasterPassword from '../components/MasterPassword';
import SiteKeyword from '../components/SiteKeyword';
import DisplayPassword from '../components/DisplayPassword';

export function main ({DOM, SHA}) {
  const masterPasswordSinks = MasterPassword({DOM});

  const siteKeywordSinks = SiteKeyword({DOM});

  const masterAndKeyword$ = siteKeywordSinks.keyword$
    .compose(sampleCombine(masterPasswordSinks.masterPassword$))
    .map(([keyword, masterPassword]) => masterPassword + keyword);

  const generatedPassword$ = SHA.outputHash$;

  const displaySinks = DisplayPassword({DOM, generatedPassword$});

  const vdom$ = xs.combine(
    masterPasswordSinks.DOM,
    siteKeywordSinks.DOM,
    displaySinks.DOM
  ).map(vtrees => div('.app', vtrees));

  return {
    DOM: vdom$,
    SHA: masterAndKeyword$
  }
}
