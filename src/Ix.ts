import { AsyncSink } from './asynciterable/asyncsink';
import { IterableX } from './iterable/iterablex';
import { AsyncIterableX } from './asynciterable/asynciterablex';
import { GroupedIterable } from './iterable/groupby';
import { GroupedAsyncIterable } from './asynciterable/operators/groupby';
export { OrderedIterableX as OrderedIterable } from './iterable/orderby';
export { OrderedIterableBaseX as OrderedIterableBase } from './iterable/orderby';
export { OrderedAsyncIterableX as OrderedAsyncIterable } from './asynciterable/operators/orderby';
export { OrderedAsyncIterableBaseX as OrderedAsyncIterableBase } from './asynciterable/operators/orderby';

export { AsyncSink, IterableX as Iterable, AsyncIterableX as AsyncIterable };

// Also export default to accommodate quirks of node's `--experimental-modules` mode
export default {
  AsyncSink,
  Iterable: IterableX,
  AsyncIterable: AsyncIterableX
};

export type GroupedIterable<TKey, TValue> = GroupedIterable<TKey, TValue>;
export type GroupedAsyncIterable<TKey, TValue> = GroupedAsyncIterable<TKey, TValue>;

/* These declarations are needed for the closure/umd targets */
export declare namespace Symbol {
  export const iterator: symbol;
  export const asyncIterator: symbol;
}
try {
  const Ix = eval('exports');
  if (typeof Ix === 'object') {
    // string indexers tell closure compiler not to rename these properties
    Ix['Iterable'] = IterableX;
    Ix['AsyncSink'] = AsyncSink;
    Ix['AsyncIterable'] = AsyncIterableX;
  }
} catch (e) {
  /* not the UMD bundle */
}
/** end google declarations */
