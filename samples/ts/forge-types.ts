/*
 * Project: java2typescript - https://github.com/bsorrentino/java2typescript
 *
 * Author: bsorrentino 
 *
 * TYPESCRIPT EXPORTED DECLARATIONS
 *
 */
/// <reference path="forge.d.ts"/>

interface StringStatic {

	readonly class:any;
	new( arg0:bytearray ):string;
	new( arg0:bytearray, arg1:int, arg2:int ):string;
	new( arg0:bytearray, arg1:any /*java.nio.charset.Charset*/ ):string;
	new( arg0:bytearray, arg1:string ):string;
	new( arg0:bytearray, arg1:int, arg2:int, arg3:any /*java.nio.charset.Charset*/ ):string;
	new( arg0:any /*java.lang.StringBuilder*/ ):string;
	new( arg0:any /*java.lang.StringBuffer*/ ):string;
	new( arg0:chararray, arg1:int, arg2:int ):string;
	new( arg0:chararray ):string;
	new( arg0:string ):string;
	new(  ):string;
	new( arg0:bytearray, arg1:int, arg2:int, arg3:string ):string;
	new( arg0:bytearray, arg1:int ):string;
	new( arg0:bytearray, arg1:int, arg2:int, arg3:int ):string;
	new( arg0:[int], arg1:int, arg2:int ):string;
	copyValueOf( arg0:chararray, arg1:int, arg2:int ):string;
	copyValueOf( arg0:chararray ):string;
	format( arg0:string, ...arg1:any /*java.lang.Object*/[] ):string;
	format( arg0:any /*java.util.Locale*/, arg1:string, ...arg2:any /*java.lang.Object*/[] ):string;
	join( arg0:any /*java.lang.CharSequence*/, ...arg1:any /*java.lang.CharSequence*/[] ):string;
	join( arg0:any /*java.lang.CharSequence*/, arg1:java.lang.Iterable<any /*java.lang.CharSequence*/> ):string;
	valueOf( arg0:double ):string;
	valueOf( arg0:int ):string;
	valueOf( arg0:float ):string;
	valueOf( arg0:boolean ):string;
	valueOf( arg0:long ):string;
	valueOf( arg0:any /*java.lang.Object*/ ):string;
	valueOf( arg0:any /*char*/ ):string;
	valueOf( arg0:chararray ):string;
	valueOf( arg0:chararray, arg1:int, arg2:int ):string;
}

export const String: StringStatic = Java.type("java.lang.String");


interface StreamStatic {

	readonly class:any;
	builder(  ):any /*java.util.stream.Stream$Builder*/;
	concat<T>( arg0:java.util.stream.Stream<T>, arg1:java.util.stream.Stream<T> ):java.util.stream.Stream<T>;
	empty<T>(  ):java.util.stream.Stream<T>;
	generate<T>( arg0:Supplier<T> ):java.util.stream.Stream<T>;
	iterate<T>( arg0:T, arg1:UnaryOperator<T> ):java.util.stream.Stream<T>;
	iterate<T>( arg0:T, arg1:Predicate<T>, arg2:UnaryOperator<T> ):java.util.stream.Stream<T>;
	of<T>( arg0:T ):java.util.stream.Stream<T>;
	of<T>( ...arg0:T[] ):java.util.stream.Stream<T>;
	ofNullable<T>( arg0:T ):java.util.stream.Stream<T>;
}

export const Stream: StreamStatic = Java.type("java.util.stream.Stream");


interface ExecutionBuilderStatic {

	readonly class:any;
	create( arg0:any /*org.jboss.forge.addon.maven.plugins.ExecutionImpl*/ ):org.jboss.forge.addon.maven.plugins.ExecutionBuilder;
	create(  ):org.jboss.forge.addon.maven.plugins.ExecutionBuilder;
}

export const ExecutionBuilder: ExecutionBuilderStatic = Java.type("org.jboss.forge.addon.maven.plugins.ExecutionBuilder");


interface CollectionsStatic {

	readonly class:any;
	addAll<T>( arg0:java.util.Collection<T>, ...arg1:T[] ):boolean;
	asLifoQueue( arg0:any /*java.util.Deque*/ ):any /*java.util.Queue*/;
	binarySearch<T>( arg0:List<T>, arg1:T, arg2:any /*java.util.Comparator*/ ):int;
	binarySearch<T>( arg0:List<java.lang.Comparable<T>>, arg1:T ):int;
	checkedCollection<E>( arg0:java.util.Collection<E>, arg1:java.lang.Class<E> ):java.util.Collection<E>;
	checkedList<E>( arg0:List<E>, arg1:java.lang.Class<E> ):List<E>;
	checkedMap<K,V>( arg0:java.util.Map<K, V>, arg1:java.lang.Class<K>, arg2:java.lang.Class<V> ):java.util.Map<K, V>;
	checkedNavigableMap<K,V>( arg0:any /*java.util.NavigableMap*/, arg1:java.lang.Class<K>, arg2:java.lang.Class<V> ):any /*java.util.NavigableMap*/;
	checkedNavigableSet<E>( arg0:any /*java.util.NavigableSet*/, arg1:java.lang.Class<E> ):any /*java.util.NavigableSet*/;
	checkedQueue<E>( arg0:any /*java.util.Queue*/, arg1:java.lang.Class<E> ):any /*java.util.Queue*/;
	checkedSet<E>( arg0:java.util.Set<E>, arg1:java.lang.Class<E> ):java.util.Set<E>;
	checkedSortedMap<K,V>( arg0:any /*java.util.SortedMap*/, arg1:java.lang.Class<K>, arg2:java.lang.Class<V> ):any /*java.util.SortedMap*/;
	checkedSortedSet<E>( arg0:any /*java.util.SortedSet*/, arg1:java.lang.Class<E> ):any /*java.util.SortedSet*/;
	copy<T>( arg0:List<T>, arg1:List<T> ):void;
	disjoint( arg0:java.util.Collection<any /*java.lang.Object*/>, arg1:java.util.Collection<any /*java.lang.Object*/> ):boolean;
	emptyEnumeration(  ):any /*java.util.Enumeration*/;
	emptyIterator<T>(  ):java.util.Iterator<T>;
	emptyList<T>(  ):List<T>;
	emptyListIterator(  ):any /*java.util.ListIterator*/;
	emptyMap<K,V>(  ):java.util.Map<K, V>;
	emptyNavigableMap(  ):any /*java.util.NavigableMap*/;
	emptyNavigableSet(  ):any /*java.util.NavigableSet*/;
	emptySet<T>(  ):java.util.Set<T>;
	emptySortedMap(  ):any /*java.util.SortedMap*/;
	emptySortedSet(  ):any /*java.util.SortedSet*/;
	enumeration<T>( arg0:java.util.Collection<T> ):any /*java.util.Enumeration*/;
	fill<T>( arg0:List<T>, arg1:T ):void;
	frequency( arg0:java.util.Collection<any /*java.lang.Object*/>, arg1:any /*java.lang.Object*/ ):int;
	indexOfSubList( arg0:List<any /*java.lang.Object*/>, arg1:List<any /*java.lang.Object*/> ):int;
	lastIndexOfSubList( arg0:List<any /*java.lang.Object*/>, arg1:List<any /*java.lang.Object*/> ):int;
	list( arg0:any /*java.util.Enumeration*/ ):any /*java.util.ArrayList*/;
	max<T>( arg0:java.util.Collection<T> ):T;
	max<T>( arg0:java.util.Collection<T>, arg1:any /*java.util.Comparator*/ ):T;
	min<T>( arg0:java.util.Collection<T> ):T;
	min<T>( arg0:java.util.Collection<T>, arg1:any /*java.util.Comparator*/ ):T;
	nCopies<T>( arg0:int, arg1:T ):List<T>;
	newSetFromMap<E>( arg0:java.util.Map<E, boolean|null> ):java.util.Set<E>;
	replaceAll<T>( arg0:List<T>, arg1:T, arg2:T ):boolean;
	reverse( arg0:List<any /*java.lang.Object*/> ):void;
	reverseOrder( arg0:any /*java.util.Comparator*/ ):any /*java.util.Comparator*/;
	reverseOrder(  ):any /*java.util.Comparator*/;
	rotate( arg0:List<any /*java.lang.Object*/>, arg1:int ):void;
	shuffle( arg0:List<any /*java.lang.Object*/>, arg1:any /*java.util.Random*/ ):void;
	shuffle( arg0:List<any /*java.lang.Object*/> ):void;
	singleton<T>( arg0:T ):java.util.Set<T>;
	singletonList<T>( arg0:T ):List<T>;
	singletonMap<K,V>( arg0:K, arg1:V ):java.util.Map<K, V>;
	sort<T>( arg0:List<T> ):void;
	sort<T>( arg0:List<T>, arg1:any /*java.util.Comparator*/ ):void;
	swap( arg0:List<any /*java.lang.Object*/>, arg1:int, arg2:int ):void;
	synchronizedCollection<T>( arg0:java.util.Collection<T> ):java.util.Collection<T>;
	synchronizedList<T>( arg0:List<T> ):List<T>;
	synchronizedMap<K,V>( arg0:java.util.Map<K, V> ):java.util.Map<K, V>;
	synchronizedNavigableMap( arg0:any /*java.util.NavigableMap*/ ):any /*java.util.NavigableMap*/;
	synchronizedNavigableSet( arg0:any /*java.util.NavigableSet*/ ):any /*java.util.NavigableSet*/;
	synchronizedSet<T>( arg0:java.util.Set<T> ):java.util.Set<T>;
	synchronizedSortedMap( arg0:any /*java.util.SortedMap*/ ):any /*java.util.SortedMap*/;
	synchronizedSortedSet( arg0:any /*java.util.SortedSet*/ ):any /*java.util.SortedSet*/;
	unmodifiableCollection<T>( arg0:java.util.Collection<T> ):java.util.Collection<T>;
	unmodifiableList<T>( arg0:List<T> ):List<T>;
	unmodifiableMap<K,V>( arg0:java.util.Map<K, V> ):java.util.Map<K, V>;
	unmodifiableNavigableMap( arg0:any /*java.util.NavigableMap*/ ):any /*java.util.NavigableMap*/;
	unmodifiableNavigableSet( arg0:any /*java.util.NavigableSet*/ ):any /*java.util.NavigableSet*/;
	unmodifiableSet<T>( arg0:java.util.Set<T> ):java.util.Set<T>;
	unmodifiableSortedMap( arg0:any /*java.util.SortedMap*/ ):any /*java.util.SortedMap*/;
	unmodifiableSortedSet( arg0:any /*java.util.SortedSet*/ ):any /*java.util.SortedSet*/;
}

export const Collections: CollectionsStatic = Java.type("java.util.Collections");


interface RoasterStatic {

	readonly class:any;
	create<T>( arg0:java.lang.Class<T> ):T;
	format( arg0:string ):string;
	format( arg0:any /*java.util.Properties*/, arg1:string ):string;
	parse<T>( arg0:java.lang.Class<T>, arg1:any /*java.net.URL*/ ):T;
	parse<T>( arg0:java.lang.Class<T>, arg1:any /*java.io.File*/ ):T;
	parse<T>( arg0:java.lang.Class<T>, arg1:chararray ):T;
	parse<T>( arg0:java.lang.Class<T>, arg1:string ):T;
	parse<T>( arg0:java.lang.Class<T>, arg1:any /*java.io.InputStream*/ ):T;
	parse( arg0:any /*java.io.File*/ ):any /*org.jboss.forge.roaster.model.JavaType*/;
	parse( arg0:any /*java.net.URL*/ ):any /*org.jboss.forge.roaster.model.JavaType*/;
	parse( arg0:any /*java.io.InputStream*/ ):any /*org.jboss.forge.roaster.model.JavaType*/;
	parse( arg0:string ):any /*org.jboss.forge.roaster.model.JavaType*/;
	parse( arg0:chararray ):any /*org.jboss.forge.roaster.model.JavaType*/;
	parseUnit( arg0:any /*java.io.InputStream*/ ):any /*org.jboss.forge.roaster.model.JavaUnit*/;
	parseUnit( arg0:string ):any /*org.jboss.forge.roaster.model.JavaUnit*/;
	validateSnippet( arg0:string ):List<any /*org.jboss.forge.roaster.Problem*/>;
}

export const Roaster: RoasterStatic = Java.type("org.jboss.forge.roaster.Roaster");


interface JavaClassSourceStatic {

	readonly class:any;
}

export const JavaClassSource: JavaClassSourceStatic = Java.type("org.jboss.forge.roaster.model.source.JavaClassSource");


interface MavenPluginBuilderStatic {

	readonly class:any;
	create( arg0:org.jboss.forge.addon.maven.plugins.MavenPlugin ):org.jboss.forge.addon.maven.plugins.MavenPluginBuilder;
	create(  ):org.jboss.forge.addon.maven.plugins.MavenPluginBuilder;
}

export const MavenPluginBuilder: MavenPluginBuilderStatic = Java.type("org.jboss.forge.addon.maven.plugins.MavenPluginBuilder");


interface ConfigurationBuilderStatic {

	readonly class:any;
	create( arg0:org.jboss.forge.addon.maven.plugins.MavenPluginBuilder ):org.jboss.forge.addon.maven.plugins.ConfigurationBuilder;
	create( arg0:org.jboss.forge.addon.maven.plugins.Configuration, arg1:org.jboss.forge.addon.maven.plugins.MavenPluginBuilder ):org.jboss.forge.addon.maven.plugins.ConfigurationBuilder;
	create(  ):org.jboss.forge.addon.maven.plugins.ConfigurationBuilder;
}

export const ConfigurationBuilder: ConfigurationBuilderStatic = Java.type("org.jboss.forge.addon.maven.plugins.ConfigurationBuilder");


interface CollectorsStatic {

	readonly class:any;
	averagingDouble( arg0:any /*java.util.function.ToDoubleFunction*/ ):any /*java.util.stream.Collector*/;
	averagingInt( arg0:any /*java.util.function.ToIntFunction*/ ):any /*java.util.stream.Collector*/;
	averagingLong( arg0:any /*java.util.function.ToLongFunction*/ ):any /*java.util.stream.Collector*/;
	collectingAndThen<RR,R>( arg0:any /*java.util.stream.Collector*/, arg1:Func<R, RR> ):any /*java.util.stream.Collector*/;
	counting(  ):any /*java.util.stream.Collector*/;
	filtering<T>( arg0:Predicate<T>, arg1:any /*java.util.stream.Collector*/ ):any /*java.util.stream.Collector*/;
	flatMapping<T,U>( arg0:Func<T, java.util.stream.Stream<U>>, arg1:any /*java.util.stream.Collector*/ ):any /*java.util.stream.Collector*/;
	groupingBy<K,T>( arg0:Func<T, K>, arg1:any /*java.util.stream.Collector*/ ):any /*java.util.stream.Collector*/;
	groupingBy<K,T>( arg0:Func<T, K> ):any /*java.util.stream.Collector*/;
	groupingBy<K,T,M>( arg0:Func<T, K>, arg1:Supplier<M>, arg2:any /*java.util.stream.Collector*/ ):any /*java.util.stream.Collector*/;
	groupingByConcurrent<K,T>( arg0:Func<T, K> ):any /*java.util.stream.Collector*/;
	groupingByConcurrent<K,T>( arg0:Func<T, K>, arg1:any /*java.util.stream.Collector*/ ):any /*java.util.stream.Collector*/;
	groupingByConcurrent<K,T,M>( arg0:Func<T, K>, arg1:Supplier<M>, arg2:any /*java.util.stream.Collector*/ ):any /*java.util.stream.Collector*/;
	joining( arg0:any /*java.lang.CharSequence*/, arg1:any /*java.lang.CharSequence*/, arg2:any /*java.lang.CharSequence*/ ):any /*java.util.stream.Collector*/;
	joining( arg0:any /*java.lang.CharSequence*/ ):any /*java.util.stream.Collector*/;
	joining(  ):any /*java.util.stream.Collector*/;
	mapping<T,U>( arg0:Func<T, U>, arg1:any /*java.util.stream.Collector*/ ):any /*java.util.stream.Collector*/;
	maxBy( arg0:any /*java.util.Comparator*/ ):any /*java.util.stream.Collector*/;
	minBy( arg0:any /*java.util.Comparator*/ ):any /*java.util.stream.Collector*/;
	partitioningBy<T>( arg0:Predicate<T> ):any /*java.util.stream.Collector*/;
	partitioningBy<T>( arg0:Predicate<T>, arg1:any /*java.util.stream.Collector*/ ):any /*java.util.stream.Collector*/;
	reducing<T>( arg0:BinaryOperator<T> ):any /*java.util.stream.Collector*/;
	reducing<T,U>( arg0:U, arg1:Func<T, U>, arg2:BinaryOperator<U> ):any /*java.util.stream.Collector*/;
	reducing<T>( arg0:T, arg1:BinaryOperator<T> ):any /*java.util.stream.Collector*/;
	summarizingDouble( arg0:any /*java.util.function.ToDoubleFunction*/ ):any /*java.util.stream.Collector*/;
	summarizingInt( arg0:any /*java.util.function.ToIntFunction*/ ):any /*java.util.stream.Collector*/;
	summarizingLong( arg0:any /*java.util.function.ToLongFunction*/ ):any /*java.util.stream.Collector*/;
	summingDouble( arg0:any /*java.util.function.ToDoubleFunction*/ ):any /*java.util.stream.Collector*/;
	summingInt( arg0:any /*java.util.function.ToIntFunction*/ ):any /*java.util.stream.Collector*/;
	summingLong( arg0:any /*java.util.function.ToLongFunction*/ ):any /*java.util.stream.Collector*/;
	toCollection<C>( arg0:Supplier<C> ):any /*java.util.stream.Collector*/;
	toConcurrentMap<K,T,U>( arg0:Func<T, K>, arg1:Func<T, U>, arg2:BinaryOperator<U> ):any /*java.util.stream.Collector*/;
	toConcurrentMap<K,T,U,M>( arg0:Func<T, K>, arg1:Func<T, U>, arg2:BinaryOperator<U>, arg3:Supplier<M> ):any /*java.util.stream.Collector*/;
	toConcurrentMap<K,T,U>( arg0:Func<T, K>, arg1:Func<T, U> ):any /*java.util.stream.Collector*/;
	toList(  ):any /*java.util.stream.Collector*/;
	toMap<K,T,U,M>( arg0:Func<T, K>, arg1:Func<T, U>, arg2:BinaryOperator<U>, arg3:Supplier<M> ):any /*java.util.stream.Collector*/;
	toMap<K,T,U>( arg0:Func<T, K>, arg1:Func<T, U>, arg2:BinaryOperator<U> ):any /*java.util.stream.Collector*/;
	toMap<K,T,U>( arg0:Func<T, K>, arg1:Func<T, U> ):any /*java.util.stream.Collector*/;
	toSet(  ):any /*java.util.stream.Collector*/;
	toUnmodifiableList(  ):any /*java.util.stream.Collector*/;
	toUnmodifiableMap<K,T,U>( arg0:Func<T, K>, arg1:Func<T, U> ):any /*java.util.stream.Collector*/;
	toUnmodifiableMap<K,T,U>( arg0:Func<T, K>, arg1:Func<T, U>, arg2:BinaryOperator<U> ):any /*java.util.stream.Collector*/;
	toUnmodifiableSet(  ):any /*java.util.stream.Collector*/;
}

export const Collectors: CollectorsStatic = Java.type("java.util.stream.Collectors");


interface ConfigurationElementBuilderStatic {

	readonly class:any;
	create(  ):org.jboss.forge.addon.maven.plugins.ConfigurationElementBuilder;
	create( arg0:org.jboss.forge.addon.maven.plugins.ConfigurationElementBuilder ):org.jboss.forge.addon.maven.plugins.ConfigurationElementBuilder;
	create( arg0:org.jboss.forge.addon.maven.plugins.ConfigurationBuilder ):org.jboss.forge.addon.maven.plugins.ConfigurationElementBuilder;
	createFromExisting( arg0:org.jboss.forge.addon.maven.plugins.ConfigurationElement ):org.jboss.forge.addon.maven.plugins.ConfigurationElementBuilder;
}

export const ConfigurationElementBuilder: ConfigurationElementBuilderStatic = Java.type("org.jboss.forge.addon.maven.plugins.ConfigurationElementBuilder");


interface DependencyBuilderStatic {

	readonly class:any;
	create( arg0:org.jboss.forge.addon.dependencies.Dependency ):org.jboss.forge.addon.dependencies.builder.DependencyBuilder;
	create(  ):org.jboss.forge.addon.dependencies.builder.DependencyBuilder;
	create( arg0:string ):org.jboss.forge.addon.dependencies.builder.DependencyBuilder;
}

export const DependencyBuilder: DependencyBuilderStatic = Java.type("org.jboss.forge.addon.dependencies.builder.DependencyBuilder");


interface DependencyQueryBuilderStatic {

	readonly class:any;
	create( arg0:string ):org.jboss.forge.addon.dependencies.builder.DependencyQueryBuilder;
	create( arg0:any /*org.jboss.forge.addon.dependencies.DependencyQuery*/ ):org.jboss.forge.addon.dependencies.builder.DependencyQueryBuilder;
	create( arg0:org.jboss.forge.addon.dependencies.Coordinate ):org.jboss.forge.addon.dependencies.builder.DependencyQueryBuilder;
}

export const DependencyQueryBuilder: DependencyQueryBuilderStatic = Java.type("org.jboss.forge.addon.dependencies.builder.DependencyQueryBuilder");


interface MavenDependencyAdapterStatic {

	readonly class:any;
	new( arg0:any /*org.eclipse.aether.graph.Dependency*/ ):org.jboss.forge.addon.maven.dependencies.MavenDependencyAdapter;
	new( arg0:org.jboss.forge.addon.dependencies.Dependency ):org.jboss.forge.addon.maven.dependencies.MavenDependencyAdapter;
	new( arg0:org.apache.maven.model.Dependency ):org.jboss.forge.addon.maven.dependencies.MavenDependencyAdapter;
	fromAetherList( arg0:List<any /*org.eclipse.aether.graph.Dependency*/> ):List<org.jboss.forge.addon.dependencies.Dependency>;
	fromMavenList( arg0:List<org.apache.maven.model.Dependency> ):List<org.jboss.forge.addon.dependencies.Dependency>;
	toMavenList( arg0:List<org.jboss.forge.addon.dependencies.Dependency> ):List<org.apache.maven.model.Dependency>;
}

export const MavenDependencyAdapter: MavenDependencyAdapterStatic = Java.type("org.jboss.forge.addon.maven.dependencies.MavenDependencyAdapter");


interface ArraysStatic {

	readonly class:any;
	asList<T>( ...arg0:T[] ):List<T>;
	binarySearch<T>( arg0:[T], arg1:T, arg2:any /*java.util.Comparator*/ ):int;
	binarySearch( arg0:[float], arg1:int, arg2:int, arg3:float ):int;
	binarySearch( arg0:[float], arg1:float ):int;
	binarySearch( arg0:[int], arg1:int, arg2:int, arg3:int ):int;
	binarySearch( arg0:[double], arg1:int, arg2:int, arg3:double ):int;
	binarySearch( arg0:[double], arg1:double ):int;
	binarySearch( arg0:[any /*short*/], arg1:any /*short*/ ):int;
	binarySearch( arg0:chararray, arg1:any /*char*/ ):int;
	binarySearch( arg0:[long], arg1:int, arg2:int, arg3:long ):int;
	binarySearch( arg0:[any /*java.lang.Object*/], arg1:any /*java.lang.Object*/ ):int;
	binarySearch( arg0:chararray, arg1:int, arg2:int, arg3:any /*char*/ ):int;
	binarySearch( arg0:[long], arg1:long ):int;
	binarySearch<T>( arg0:[T], arg1:int, arg2:int, arg3:T, arg4:any /*java.util.Comparator*/ ):int;
	binarySearch( arg0:[any /*java.lang.Object*/], arg1:int, arg2:int, arg3:any /*java.lang.Object*/ ):int;
	binarySearch( arg0:[int], arg1:int ):int;
	binarySearch( arg0:bytearray, arg1:int, arg2:int, arg3:any /*byte*/ ):int;
	binarySearch( arg0:[any /*short*/], arg1:int, arg2:int, arg3:any /*short*/ ):int;
	binarySearch( arg0:bytearray, arg1:any /*byte*/ ):int;
	compare( arg0:bytearray, arg1:int, arg2:int, arg3:bytearray, arg4:int, arg5:int ):int;
	compare( arg0:bytearray, arg1:bytearray ):int;
	compare<T>( arg0:[T], arg1:int, arg2:int, arg3:[T], arg4:int, arg5:int ):int;
	compare( arg0:chararray, arg1:chararray ):int;
	compare( arg0:[any /*short*/], arg1:int, arg2:int, arg3:[any /*short*/], arg4:int, arg5:int ):int;
	compare( arg0:[long], arg1:int, arg2:int, arg3:[long], arg4:int, arg5:int ):int;
	compare( arg0:[any /*short*/], arg1:[any /*short*/] ):int;
	compare<T>( arg0:[T], arg1:[T] ):int;
	compare( arg0:[int], arg1:int, arg2:int, arg3:[int], arg4:int, arg5:int ):int;
	compare( arg0:[boolean], arg1:int, arg2:int, arg3:[boolean], arg4:int, arg5:int ):int;
	compare( arg0:[boolean], arg1:[boolean] ):int;
	compare( arg0:[float], arg1:[float] ):int;
	compare( arg0:[float], arg1:int, arg2:int, arg3:[float], arg4:int, arg5:int ):int;
	compare<T>( arg0:[T], arg1:int, arg2:int, arg3:[T], arg4:int, arg5:int, arg6:any /*java.util.Comparator*/ ):int;
	compare( arg0:[double], arg1:int, arg2:int, arg3:[double], arg4:int, arg5:int ):int;
	compare( arg0:[long], arg1:[long] ):int;
	compare( arg0:[double], arg1:[double] ):int;
	compare<T>( arg0:[T], arg1:[T], arg2:any /*java.util.Comparator*/ ):int;
	compare( arg0:chararray, arg1:int, arg2:int, arg3:chararray, arg4:int, arg5:int ):int;
	compare( arg0:[int], arg1:[int] ):int;
	compareUnsigned( arg0:[any /*short*/], arg1:int, arg2:int, arg3:[any /*short*/], arg4:int, arg5:int ):int;
	compareUnsigned( arg0:bytearray, arg1:bytearray ):int;
	compareUnsigned( arg0:[any /*short*/], arg1:[any /*short*/] ):int;
	compareUnsigned( arg0:bytearray, arg1:int, arg2:int, arg3:bytearray, arg4:int, arg5:int ):int;
	compareUnsigned( arg0:[long], arg1:[long] ):int;
	compareUnsigned( arg0:[long], arg1:int, arg2:int, arg3:[long], arg4:int, arg5:int ):int;
	compareUnsigned( arg0:[int], arg1:int, arg2:int, arg3:[int], arg4:int, arg5:int ):int;
	compareUnsigned( arg0:[int], arg1:[int] ):int;
	copyOf( arg0:bytearray, arg1:int ):bytearray;
	copyOf( arg0:[int], arg1:int ):[int];
	copyOf<T,U>( arg0:[U], arg1:int, arg2:java.lang.Class<[T]> ):[T];
	copyOf( arg0:[float], arg1:int ):[float];
	copyOf( arg0:[long], arg1:int ):[long];
	copyOf( arg0:chararray, arg1:int ):chararray;
	copyOf( arg0:[boolean], arg1:int ):[boolean];
	copyOf( arg0:[double], arg1:int ):[double];
	copyOf( arg0:[any /*short*/], arg1:int ):[any /*short*/];
	copyOf<T>( arg0:[T], arg1:int ):[T];
	copyOfRange( arg0:[int], arg1:int, arg2:int ):[int];
	copyOfRange( arg0:[any /*short*/], arg1:int, arg2:int ):[any /*short*/];
	copyOfRange( arg0:bytearray, arg1:int, arg2:int ):bytearray;
	copyOfRange( arg0:[long], arg1:int, arg2:int ):[long];
	copyOfRange( arg0:[boolean], arg1:int, arg2:int ):[boolean];
	copyOfRange( arg0:[float], arg1:int, arg2:int ):[float];
	copyOfRange( arg0:chararray, arg1:int, arg2:int ):chararray;
	copyOfRange<T,U>( arg0:[U], arg1:int, arg2:int, arg3:java.lang.Class<[T]> ):[T];
	copyOfRange( arg0:[double], arg1:int, arg2:int ):[double];
	copyOfRange<T>( arg0:[T], arg1:int, arg2:int ):[T];
	deepEquals( arg0:[any /*java.lang.Object*/], arg1:[any /*java.lang.Object*/] ):boolean;
	deepHashCode( arg0:[any /*java.lang.Object*/] ):int;
	deepToString( arg0:[any /*java.lang.Object*/] ):string;
	equals( arg0:[double], arg1:int, arg2:int, arg3:[double], arg4:int, arg5:int ):boolean;
	equals( arg0:[float], arg1:[float] ):boolean;
	equals( arg0:[double], arg1:[double] ):boolean;
	equals( arg0:bytearray, arg1:bytearray ):boolean;
	equals( arg0:[boolean], arg1:int, arg2:int, arg3:[boolean], arg4:int, arg5:int ):boolean;
	equals( arg0:[int], arg1:[int] ):boolean;
	equals( arg0:[long], arg1:[long] ):boolean;
	equals( arg0:[boolean], arg1:[boolean] ):boolean;
	equals<T>( arg0:[T], arg1:int, arg2:int, arg3:[T], arg4:int, arg5:int, arg6:any /*java.util.Comparator*/ ):boolean;
	equals( arg0:bytearray, arg1:int, arg2:int, arg3:bytearray, arg4:int, arg5:int ):boolean;
	equals<T>( arg0:[T], arg1:[T], arg2:any /*java.util.Comparator*/ ):boolean;
	equals( arg0:[any /*java.lang.Object*/], arg1:int, arg2:int, arg3:[any /*java.lang.Object*/], arg4:int, arg5:int ):boolean;
	equals( arg0:[any /*java.lang.Object*/], arg1:[any /*java.lang.Object*/] ):boolean;
	equals( arg0:chararray, arg1:chararray ):boolean;
	equals( arg0:[float], arg1:int, arg2:int, arg3:[float], arg4:int, arg5:int ):boolean;
	equals( arg0:[long], arg1:int, arg2:int, arg3:[long], arg4:int, arg5:int ):boolean;
	equals( arg0:[any /*short*/], arg1:int, arg2:int, arg3:[any /*short*/], arg4:int, arg5:int ):boolean;
	equals( arg0:[int], arg1:int, arg2:int, arg3:[int], arg4:int, arg5:int ):boolean;
	equals( arg0:[any /*short*/], arg1:[any /*short*/] ):boolean;
	equals( arg0:chararray, arg1:int, arg2:int, arg3:chararray, arg4:int, arg5:int ):boolean;
	fill( arg0:[any /*java.lang.Object*/], arg1:any /*java.lang.Object*/ ):void;
	fill( arg0:[long], arg1:long ):void;
	fill( arg0:[long], arg1:int, arg2:int, arg3:long ):void;
	fill( arg0:[int], arg1:int ):void;
	fill( arg0:[boolean], arg1:int, arg2:int, arg3:boolean ):void;
	fill( arg0:chararray, arg1:any /*char*/ ):void;
	fill( arg0:[int], arg1:int, arg2:int, arg3:int ):void;
	fill( arg0:[double], arg1:int, arg2:int, arg3:double ):void;
	fill( arg0:[float], arg1:int, arg2:int, arg3:float ):void;
	fill( arg0:[any /*short*/], arg1:any /*short*/ ):void;
	fill( arg0:[any /*java.lang.Object*/], arg1:int, arg2:int, arg3:any /*java.lang.Object*/ ):void;
	fill( arg0:[float], arg1:float ):void;
	fill( arg0:bytearray, arg1:int, arg2:int, arg3:any /*byte*/ ):void;
	fill( arg0:chararray, arg1:int, arg2:int, arg3:any /*char*/ ):void;
	fill( arg0:[boolean], arg1:boolean ):void;
	fill( arg0:[double], arg1:double ):void;
	fill( arg0:bytearray, arg1:any /*byte*/ ):void;
	fill( arg0:[any /*short*/], arg1:int, arg2:int, arg3:any /*short*/ ):void;
	hashCode( arg0:bytearray ):int;
	hashCode( arg0:[float] ):int;
	hashCode( arg0:[double] ):int;
	hashCode( arg0:[any /*java.lang.Object*/] ):int;
	hashCode( arg0:[boolean] ):int;
	hashCode( arg0:[long] ):int;
	hashCode( arg0:[int] ):int;
	hashCode( arg0:[any /*short*/] ):int;
	hashCode( arg0:chararray ):int;
	mismatch( arg0:[double], arg1:[double] ):int;
	mismatch( arg0:[double], arg1:int, arg2:int, arg3:[double], arg4:int, arg5:int ):int;
	mismatch( arg0:[float], arg1:int, arg2:int, arg3:[float], arg4:int, arg5:int ):int;
	mismatch( arg0:[boolean], arg1:int, arg2:int, arg3:[boolean], arg4:int, arg5:int ):int;
	mismatch( arg0:[float], arg1:[float] ):int;
	mismatch( arg0:[any /*short*/], arg1:int, arg2:int, arg3:[any /*short*/], arg4:int, arg5:int ):int;
	mismatch( arg0:[any /*java.lang.Object*/], arg1:[any /*java.lang.Object*/] ):int;
	mismatch( arg0:[int], arg1:int, arg2:int, arg3:[int], arg4:int, arg5:int ):int;
	mismatch( arg0:[any /*short*/], arg1:[any /*short*/] ):int;
	mismatch( arg0:[long], arg1:int, arg2:int, arg3:[long], arg4:int, arg5:int ):int;
	mismatch( arg0:chararray, arg1:chararray ):int;
	mismatch<T>( arg0:[T], arg1:int, arg2:int, arg3:[T], arg4:int, arg5:int, arg6:any /*java.util.Comparator*/ ):int;
	mismatch<T>( arg0:[T], arg1:[T], arg2:any /*java.util.Comparator*/ ):int;
	mismatch( arg0:[int], arg1:[int] ):int;
	mismatch( arg0:bytearray, arg1:bytearray ):int;
	mismatch( arg0:[boolean], arg1:[boolean] ):int;
	mismatch( arg0:[any /*java.lang.Object*/], arg1:int, arg2:int, arg3:[any /*java.lang.Object*/], arg4:int, arg5:int ):int;
	mismatch( arg0:[long], arg1:[long] ):int;
	mismatch( arg0:bytearray, arg1:int, arg2:int, arg3:bytearray, arg4:int, arg5:int ):int;
	mismatch( arg0:chararray, arg1:int, arg2:int, arg3:chararray, arg4:int, arg5:int ):int;
	parallelPrefix( arg0:[int], arg1:any /*java.util.function.IntBinaryOperator*/ ):void;
	parallelPrefix( arg0:[double], arg1:any /*java.util.function.DoubleBinaryOperator*/ ):void;
	parallelPrefix( arg0:[double], arg1:int, arg2:int, arg3:any /*java.util.function.DoubleBinaryOperator*/ ):void;
	parallelPrefix( arg0:[int], arg1:int, arg2:int, arg3:any /*java.util.function.IntBinaryOperator*/ ):void;
	parallelPrefix<T>( arg0:[T], arg1:BinaryOperator<T> ):void;
	parallelPrefix( arg0:[long], arg1:int, arg2:int, arg3:any /*java.util.function.LongBinaryOperator*/ ):void;
	parallelPrefix( arg0:[long], arg1:any /*java.util.function.LongBinaryOperator*/ ):void;
	parallelPrefix<T>( arg0:[T], arg1:int, arg2:int, arg3:BinaryOperator<T> ):void;
	parallelSetAll<T>( arg0:[T], arg1:any /*java.util.function.IntFunction*/ ):void;
	parallelSetAll( arg0:[int], arg1:any /*java.util.function.IntUnaryOperator*/ ):void;
	parallelSetAll( arg0:[double], arg1:any /*java.util.function.IntToDoubleFunction*/ ):void;
	parallelSetAll( arg0:[long], arg1:any /*java.util.function.IntToLongFunction*/ ):void;
	parallelSort<T>( arg0:[T] ):void;
	parallelSort( arg0:chararray, arg1:int, arg2:int ):void;
	parallelSort( arg0:[int], arg1:int, arg2:int ):void;
	parallelSort( arg0:[double], arg1:int, arg2:int ):void;
	parallelSort( arg0:[long] ):void;
	parallelSort( arg0:[any /*short*/], arg1:int, arg2:int ):void;
	parallelSort( arg0:[float], arg1:int, arg2:int ):void;
	parallelSort( arg0:bytearray ):void;
	parallelSort( arg0:[long], arg1:int, arg2:int ):void;
	parallelSort( arg0:[float] ):void;
	parallelSort( arg0:chararray ):void;
	parallelSort( arg0:[any /*short*/] ):void;
	parallelSort( arg0:bytearray, arg1:int, arg2:int ):void;
	parallelSort( arg0:[double] ):void;
	parallelSort<T>( arg0:[T], arg1:int, arg2:int ):void;
	parallelSort<T>( arg0:[T], arg1:any /*java.util.Comparator*/ ):void;
	parallelSort<T>( arg0:[T], arg1:int, arg2:int, arg3:any /*java.util.Comparator*/ ):void;
	parallelSort( arg0:[int] ):void;
	setAll( arg0:[double], arg1:any /*java.util.function.IntToDoubleFunction*/ ):void;
	setAll( arg0:[int], arg1:any /*java.util.function.IntUnaryOperator*/ ):void;
	setAll( arg0:[long], arg1:any /*java.util.function.IntToLongFunction*/ ):void;
	setAll<T>( arg0:[T], arg1:any /*java.util.function.IntFunction*/ ):void;
	sort( arg0:[long] ):void;
	sort( arg0:[int], arg1:int, arg2:int ):void;
	sort( arg0:[long], arg1:int, arg2:int ):void;
	sort( arg0:bytearray ):void;
	sort( arg0:chararray, arg1:int, arg2:int ):void;
	sort<T>( arg0:[T], arg1:int, arg2:int, arg3:any /*java.util.Comparator*/ ):void;
	sort( arg0:[float], arg1:int, arg2:int ):void;
	sort<T>( arg0:[T], arg1:any /*java.util.Comparator*/ ):void;
	sort( arg0:[any /*java.lang.Object*/] ):void;
	sort( arg0:[any /*short*/] ):void;
	sort( arg0:[any /*short*/], arg1:int, arg2:int ):void;
	sort( arg0:[double] ):void;
	sort( arg0:bytearray, arg1:int, arg2:int ):void;
	sort( arg0:chararray ):void;
	sort( arg0:[double], arg1:int, arg2:int ):void;
	sort( arg0:[int] ):void;
	sort( arg0:[float] ):void;
	sort( arg0:[any /*java.lang.Object*/], arg1:int, arg2:int ):void;
	spliterator( arg0:[long] ):any /*java.util.Spliterator$OfLong*/;
	spliterator( arg0:[long], arg1:int, arg2:int ):any /*java.util.Spliterator$OfLong*/;
	spliterator( arg0:[double] ):any /*java.util.Spliterator$OfDouble*/;
	spliterator( arg0:[double], arg1:int, arg2:int ):any /*java.util.Spliterator$OfDouble*/;
	spliterator<T>( arg0:[T] ):any /*java.util.Spliterator*/;
	spliterator<T>( arg0:[T], arg1:int, arg2:int ):any /*java.util.Spliterator*/;
	spliterator( arg0:[int] ):any /*java.util.Spliterator$OfInt*/;
	spliterator( arg0:[int], arg1:int, arg2:int ):any /*java.util.Spliterator$OfInt*/;
	stream( arg0:[long], arg1:int, arg2:int ):any /*java.util.stream.LongStream*/;
	stream( arg0:[double] ):any /*java.util.stream.DoubleStream*/;
	stream( arg0:[double], arg1:int, arg2:int ):any /*java.util.stream.DoubleStream*/;
	stream( arg0:[int] ):any /*java.util.stream.IntStream*/;
	stream<T>( arg0:[T] ):java.util.stream.Stream<T>;
	stream<T>( arg0:[T], arg1:int, arg2:int ):java.util.stream.Stream<T>;
	stream( arg0:[int], arg1:int, arg2:int ):any /*java.util.stream.IntStream*/;
	stream( arg0:[long] ):any /*java.util.stream.LongStream*/;
	toString( arg0:[long] ):string;
	toString( arg0:[any /*java.lang.Object*/] ):string;
	toString( arg0:[boolean] ):string;
	toString( arg0:bytearray ):string;
	toString( arg0:chararray ):string;
	toString( arg0:[any /*short*/] ):string;
	toString( arg0:[int] ):string;
	toString( arg0:[double] ):string;
	toString( arg0:[float] ):string;
}

export const Arrays: ArraysStatic = Java.type("java.util.Arrays");


interface CoordinateBuilderStatic {

	readonly class:any;
	create( arg0:string ):org.jboss.forge.addon.dependencies.builder.CoordinateBuilder;
	create( arg0:org.jboss.forge.addon.dependencies.Coordinate ):org.jboss.forge.addon.dependencies.builder.CoordinateBuilder;
	create( arg0:java.util.Map<string, string> ):org.jboss.forge.addon.dependencies.builder.CoordinateBuilder;
	create(  ):org.jboss.forge.addon.dependencies.builder.CoordinateBuilder;
}

export const CoordinateBuilder: CoordinateBuilderStatic = Java.type("org.jboss.forge.addon.dependencies.builder.CoordinateBuilder");


interface IterableStatic {

	readonly class:any;
	new<T>( arg0:java.lang.Iterable<T> ):java.lang.Iterable<T>;
}

export const Iterable: IterableStatic = Java.type("java.lang.Iterable");


interface OptionalStatic {

	readonly class:any;
	empty<T>(  ):java.util.Optional<T>;
	of<T>( arg0:T ):java.util.Optional<T>;
	ofNullable<T>( arg0:T ):java.util.Optional<T>;
}

export const Optional: OptionalStatic = Java.type("java.util.Optional");


