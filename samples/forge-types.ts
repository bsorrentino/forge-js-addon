//
// EXPORT DECLARATIONS
//
//

/// <reference path="forge.d.ts"/>

interface OptionalStatic {

	readonly class:any;
	empty<T>(  ):java.util.Optional<T>;
	of<T>( arg0:T ):java.util.Optional<T>;
	ofNullable<T>( arg0:T ):java.util.Optional<T>;
}

export const Optional: OptionalStatic = Java.type("java.util.Optional");


interface IteratorStatic {

	readonly class:any;
}

export const Iterator: IteratorStatic = Java.type("java.util.Iterator");


interface DependencyQueryBuilderStatic {

	readonly class:any;
	create( arg0:any /*org.jboss.forge.addon.dependencies.DependencyQuery*/ ):org.jboss.forge.addon.dependencies.builder.DependencyQueryBuilder;
	create( arg0:org.jboss.forge.addon.dependencies.Coordinate ):org.jboss.forge.addon.dependencies.builder.DependencyQueryBuilder;
	create( arg0:string ):org.jboss.forge.addon.dependencies.builder.DependencyQueryBuilder;
}

export const DependencyQueryBuilder: DependencyQueryBuilderStatic = Java.type("org.jboss.forge.addon.dependencies.builder.DependencyQueryBuilder");


interface CoordinateBuilderStatic {

	readonly class:any;
	create(  ):org.jboss.forge.addon.dependencies.builder.CoordinateBuilder;
	create( arg0:java.util.Map<string, string> ):org.jboss.forge.addon.dependencies.builder.CoordinateBuilder;
	create( arg0:org.jboss.forge.addon.dependencies.Coordinate ):org.jboss.forge.addon.dependencies.builder.CoordinateBuilder;
	create( arg0:string ):org.jboss.forge.addon.dependencies.builder.CoordinateBuilder;
}

export const CoordinateBuilder: CoordinateBuilderStatic = Java.type("org.jboss.forge.addon.dependencies.builder.CoordinateBuilder");


interface MavenPluginBuilderStatic {

	readonly class:any;
	create(  ):org.jboss.forge.addon.maven.plugins.MavenPluginBuilder;
	create( arg0:org.jboss.forge.addon.maven.plugins.MavenPlugin ):org.jboss.forge.addon.maven.plugins.MavenPluginBuilder;
}

export const MavenPluginBuilder: MavenPluginBuilderStatic = Java.type("org.jboss.forge.addon.maven.plugins.MavenPluginBuilder");


interface DependencyBuilderStatic {

	readonly class:any;
	create(  ):org.jboss.forge.addon.dependencies.builder.DependencyBuilder;
	create( arg0:org.jboss.forge.addon.dependencies.Dependency ):org.jboss.forge.addon.dependencies.builder.DependencyBuilder;
	create( arg0:string ):org.jboss.forge.addon.dependencies.builder.DependencyBuilder;
}

export const DependencyBuilder: DependencyBuilderStatic = Java.type("org.jboss.forge.addon.dependencies.builder.DependencyBuilder");


interface ConfigurationBuilderStatic {

	readonly class:any;
	create(  ):org.jboss.forge.addon.maven.plugins.ConfigurationBuilder;
	create( arg0:org.jboss.forge.addon.maven.plugins.Configuration, arg1:org.jboss.forge.addon.maven.plugins.MavenPluginBuilder ):org.jboss.forge.addon.maven.plugins.ConfigurationBuilder;
	create( arg0:org.jboss.forge.addon.maven.plugins.MavenPluginBuilder ):org.jboss.forge.addon.maven.plugins.ConfigurationBuilder;
}

export const ConfigurationBuilder: ConfigurationBuilderStatic = Java.type("org.jboss.forge.addon.maven.plugins.ConfigurationBuilder");


interface CollectionsStatic {

	readonly class:any;
	addAll<T>( arg0:java.util.Collection<T>, ...arg1:any /*java.lang.Object*/[] ):boolean;
	asLifoQueue( arg0:any /*java.util.Deque*/ ):any /*java.util.Queue*/;
	binarySearch<T>( arg0:java.util.List<T>, arg1:T, arg2:any /*java.util.Comparator*/ ):int;
	binarySearch<T>( arg0:java.util.List<java.lang.Comparable<T>>, arg1:T ):int;
	checkedCollection<E>( arg0:java.util.Collection<E>, arg1:java.lang.Class<E> ):java.util.Collection<E>;
	checkedList<E>( arg0:java.util.List<E>, arg1:java.lang.Class<E> ):java.util.List<E>;
	checkedMap<K,V>( arg0:java.util.Map<K, V>, arg1:java.lang.Class<K>, arg2:java.lang.Class<V> ):java.util.Map<K, V>;
	checkedNavigableMap<K,V>( arg0:any /*java.util.NavigableMap*/, arg1:java.lang.Class<K>, arg2:java.lang.Class<V> ):any /*java.util.NavigableMap*/;
	checkedNavigableSet<E>( arg0:any /*java.util.NavigableSet*/, arg1:java.lang.Class<E> ):any /*java.util.NavigableSet*/;
	checkedQueue<E>( arg0:any /*java.util.Queue*/, arg1:java.lang.Class<E> ):any /*java.util.Queue*/;
	checkedSet<E>( arg0:java.util.Set<E>, arg1:java.lang.Class<E> ):java.util.Set<E>;
	checkedSortedMap<K,V>( arg0:any /*java.util.SortedMap*/, arg1:java.lang.Class<K>, arg2:java.lang.Class<V> ):any /*java.util.SortedMap*/;
	checkedSortedSet<E>( arg0:any /*java.util.SortedSet*/, arg1:java.lang.Class<E> ):any /*java.util.SortedSet*/;
	copy<T>( arg0:java.util.List<T>, arg1:java.util.List<T> ):void;
	disjoint( arg0:java.util.Collection<any /*java.lang.Object*/>, arg1:java.util.Collection<any /*java.lang.Object*/> ):boolean;
	emptyEnumeration(  ):any /*java.util.Enumeration*/;
	emptyIterator<T>(  ):java.util.Iterator<T>;
	emptyList<T>(  ):java.util.List<T>;
	emptyListIterator(  ):any /*java.util.ListIterator*/;
	emptyMap<K,V>(  ):java.util.Map<K, V>;
	emptyNavigableMap(  ):any /*java.util.NavigableMap*/;
	emptyNavigableSet(  ):any /*java.util.NavigableSet*/;
	emptySet<T>(  ):java.util.Set<T>;
	emptySortedMap(  ):any /*java.util.SortedMap*/;
	emptySortedSet(  ):any /*java.util.SortedSet*/;
	enumeration<T>( arg0:java.util.Collection<T> ):any /*java.util.Enumeration*/;
	fill<T>( arg0:java.util.List<T>, arg1:T ):void;
	frequency( arg0:java.util.Collection<any /*java.lang.Object*/>, arg1:any /*java.lang.Object*/ ):int;
	indexOfSubList( arg0:java.util.List<any /*java.lang.Object*/>, arg1:java.util.List<any /*java.lang.Object*/> ):int;
	lastIndexOfSubList( arg0:java.util.List<any /*java.lang.Object*/>, arg1:java.util.List<any /*java.lang.Object*/> ):int;
	list( arg0:any /*java.util.Enumeration*/ ):any /*java.util.ArrayList*/;
	max<T>( arg0:java.util.Collection<T> ):T;
	max<T>( arg0:java.util.Collection<T>, arg1:any /*java.util.Comparator*/ ):T;
	min<T>( arg0:java.util.Collection<T> ):T;
	min<T>( arg0:java.util.Collection<T>, arg1:any /*java.util.Comparator*/ ):T;
	nCopies<T>( arg0:int, arg1:T ):java.util.List<T>;
	newSetFromMap<E>( arg0:java.util.Map<E, boolean|null> ):java.util.Set<E>;
	replaceAll<T>( arg0:java.util.List<T>, arg1:T, arg2:T ):boolean;
	reverse( arg0:java.util.List<any /*java.lang.Object*/> ):void;
	reverseOrder(  ):any /*java.util.Comparator*/;
	reverseOrder( arg0:any /*java.util.Comparator*/ ):any /*java.util.Comparator*/;
	rotate( arg0:java.util.List<any /*java.lang.Object*/>, arg1:int ):void;
	shuffle( arg0:java.util.List<any /*java.lang.Object*/> ):void;
	shuffle( arg0:java.util.List<any /*java.lang.Object*/>, arg1:any /*java.util.Random*/ ):void;
	singleton<T>( arg0:T ):java.util.Set<T>;
	singletonList<T>( arg0:T ):java.util.List<T>;
	singletonMap<K,V>( arg0:K, arg1:V ):java.util.Map<K, V>;
	sort<T>( arg0:java.util.List<T> ):void;
	sort<T>( arg0:java.util.List<T>, arg1:any /*java.util.Comparator*/ ):void;
	swap( arg0:java.util.List<any /*java.lang.Object*/>, arg1:int, arg2:int ):void;
	synchronizedCollection<T>( arg0:java.util.Collection<T> ):java.util.Collection<T>;
	synchronizedList<T>( arg0:java.util.List<T> ):java.util.List<T>;
	synchronizedMap<K,V>( arg0:java.util.Map<K, V> ):java.util.Map<K, V>;
	synchronizedNavigableMap( arg0:any /*java.util.NavigableMap*/ ):any /*java.util.NavigableMap*/;
	synchronizedNavigableSet( arg0:any /*java.util.NavigableSet*/ ):any /*java.util.NavigableSet*/;
	synchronizedSet<T>( arg0:java.util.Set<T> ):java.util.Set<T>;
	synchronizedSortedMap( arg0:any /*java.util.SortedMap*/ ):any /*java.util.SortedMap*/;
	synchronizedSortedSet( arg0:any /*java.util.SortedSet*/ ):any /*java.util.SortedSet*/;
	unmodifiableCollection<T>( arg0:java.util.Collection<T> ):java.util.Collection<T>;
	unmodifiableList<T>( arg0:java.util.List<T> ):java.util.List<T>;
	unmodifiableMap<K,V>( arg0:java.util.Map<K, V> ):java.util.Map<K, V>;
	unmodifiableNavigableMap( arg0:any /*java.util.NavigableMap*/ ):any /*java.util.NavigableMap*/;
	unmodifiableNavigableSet( arg0:any /*java.util.NavigableSet*/ ):any /*java.util.NavigableSet*/;
	unmodifiableSet<T>( arg0:java.util.Set<T> ):java.util.Set<T>;
	unmodifiableSortedMap( arg0:any /*java.util.SortedMap*/ ):any /*java.util.SortedMap*/;
	unmodifiableSortedSet( arg0:any /*java.util.SortedSet*/ ):any /*java.util.SortedSet*/;
}

export const Collections: CollectionsStatic = Java.type("java.util.Collections");


interface MavenDependencyAdapterStatic {
	new( arg:any):org.jboss.forge.addon.maven.dependencies.MavenDependencyAdapter;
	readonly class:any;
	fromAetherList( arg0:java.util.List<any /*org.eclipse.aether.graph.Dependency*/> ):java.util.List<org.jboss.forge.addon.dependencies.Dependency>;
	fromMavenList( arg0:java.util.List<org.apache.maven.model.Dependency> ):java.util.List<org.jboss.forge.addon.dependencies.Dependency>;
	toMavenList( arg0:java.util.List<org.jboss.forge.addon.dependencies.Dependency> ):java.util.List<org.apache.maven.model.Dependency>;
}

export const MavenDependencyAdapter: MavenDependencyAdapterStatic = Java.type("org.jboss.forge.addon.maven.dependencies.MavenDependencyAdapter");


interface JavaClassSourceStatic {

	readonly class:any;
}

export const JavaClassSource: JavaClassSourceStatic = Java.type("org.jboss.forge.roaster.model.source.JavaClassSource");


interface ExecutionBuilderStatic {

	readonly class:any;
	create(  ):org.jboss.forge.addon.maven.plugins.ExecutionBuilder;
	create( arg0:any /*org.jboss.forge.addon.maven.plugins.ExecutionImpl*/ ):org.jboss.forge.addon.maven.plugins.ExecutionBuilder;
}

export const ExecutionBuilder: ExecutionBuilderStatic = Java.type("org.jboss.forge.addon.maven.plugins.ExecutionBuilder");


interface RoasterStatic {

	readonly class:any;
	create<T>( arg0:java.lang.Class<T> ):T;
	format( arg0:any /*java.util.Properties*/, arg1:string ):string;
	format( arg0:string ):string;
	parse( arg0:any /*java.io.File*/ ):any /*org.jboss.forge.roaster.model.JavaType*/;
	parse( arg0:any /*java.io.InputStream*/ ):any /*org.jboss.forge.roaster.model.JavaType*/;
	parse( arg0:any /*java.net.URL*/ ):any /*org.jboss.forge.roaster.model.JavaType*/;
	parse( arg0:chararray ):any /*org.jboss.forge.roaster.model.JavaType*/;
	parse( arg0:string ):any /*org.jboss.forge.roaster.model.JavaType*/;
	parse<T>( arg0:java.lang.Class<T>, arg1:any /*java.io.File*/ ):T;
	parse<T>( arg0:java.lang.Class<T>, arg1:any /*java.io.InputStream*/ ):T;
	parse<T>( arg0:java.lang.Class<T>, arg1:any /*java.net.URL*/ ):T;
	parse<T>( arg0:java.lang.Class<T>, arg1:chararray ):T;
	parse<T>( arg0:java.lang.Class<T>, arg1:string ):T;
	parseUnit( arg0:any /*java.io.InputStream*/ ):any /*org.jboss.forge.roaster.model.JavaUnit*/;
	parseUnit( arg0:string ):any /*org.jboss.forge.roaster.model.JavaUnit*/;
}

export const Roaster: RoasterStatic = Java.type("org.jboss.forge.roaster.Roaster");


interface StreamStatic {

	readonly class:any;
	builder(  ):any /*java.util.stream.Stream$Builder*/;
	concat<T>( arg0:java.util.stream.Stream<T>, arg1:java.util.stream.Stream<T> ):java.util.stream.Stream<T>;
	empty<T>(  ):java.util.stream.Stream<T>;
	generate<T>( arg0:Supplier<T> ):java.util.stream.Stream<T>;
	iterate<T>( arg0:T, arg1:UnaryOperator<T> ):java.util.stream.Stream<T>;
	of<T>( ...arg0:any /*java.lang.Object*/[] ):java.util.stream.Stream<T>;
	of<T>( arg0:T ):java.util.stream.Stream<T>;
}

export const Stream: StreamStatic = Java.type("java.util.stream.Stream");


interface IterableStatic {

	readonly class:any;
}

export const Iterable: IterableStatic = Java.type("java.lang.Iterable");


interface ConfigurationElementBuilderStatic {

	readonly class:any;
	create(  ):org.jboss.forge.addon.maven.plugins.ConfigurationElementBuilder;
	create( arg0:org.jboss.forge.addon.maven.plugins.ConfigurationBuilder ):org.jboss.forge.addon.maven.plugins.ConfigurationElementBuilder;
	create( arg0:org.jboss.forge.addon.maven.plugins.ConfigurationElementBuilder ):org.jboss.forge.addon.maven.plugins.ConfigurationElementBuilder;
	createFromExisting( arg0:org.jboss.forge.addon.maven.plugins.ConfigurationElement ):org.jboss.forge.addon.maven.plugins.ConfigurationElementBuilder;
}

export const ConfigurationElementBuilder: ConfigurationElementBuilderStatic = Java.type("org.jboss.forge.addon.maven.plugins.ConfigurationElementBuilder");


interface StringStatic {

	readonly class:any;
	copyValueOf( arg0:chararray ):string;
	copyValueOf( arg0:chararray, arg1:int, arg2:int ):string;
	format( arg0:any /*java.util.Locale*/, arg1:string, ...arg2:any /*java.lang.Object*/[] ):string;
	format( arg0:string, ...arg1:any /*java.lang.Object*/[] ):string;
	join( arg0:any /*java.lang.CharSequence*/, ...arg1:any /*java.lang.CharSequence*/[] ):string;
	join( arg0:any /*java.lang.CharSequence*/, arg1:java.lang.Iterable<any /*java.lang.CharSequence*/> ):string;
	valueOf( arg0:any /*char*/ ):string;
	valueOf( arg0:any /*java.lang.Object*/ ):string;
	valueOf( arg0:boolean ):string;
	valueOf( arg0:chararray ):string;
	valueOf( arg0:chararray, arg1:int, arg2:int ):string;
	valueOf( arg0:double ):string;
	valueOf( arg0:float ):string;
	valueOf( arg0:int ):string;
	valueOf( arg0:long ):string;
}

export const String: StringStatic = Java.type("java.lang.String");
