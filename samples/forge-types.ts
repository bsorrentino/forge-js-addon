//
// EXPORT DECLARATIONS
// 
//

/// <reference path="forge.d.ts"/>

interface IteratorStatic {

	readonly class:any;
}

export const Iterator: IteratorStatic = Java.type("java.util.Iterator");


interface DependencyBuilderStatic {

	readonly class:any;
	create(  ):org.jboss.forge.addon.dependencies.builder.DependencyBuilder;
	create( arg0:org.jboss.forge.addon.dependencies.Dependency ):org.jboss.forge.addon.dependencies.builder.DependencyBuilder;
	create( arg0:string ):org.jboss.forge.addon.dependencies.builder.DependencyBuilder;
}

export const DependencyBuilder: DependencyBuilderStatic = Java.type("org.jboss.forge.addon.dependencies.builder.DependencyBuilder");


interface StringStatic {

	readonly class:any;
	copyValueOf( arg0:chararray ):string;
	copyValueOf( arg0:chararray, arg1:int, arg2:int ):string;
	format( arg0:any /* java.util.Locale */, arg1:string, arg2:[any] /* [Ljava.lang.Object; */ ):string;
	format( arg0:string, arg1:[any] /* [Ljava.lang.Object; */ ):string;
	join( arg0:any /* java.lang.CharSequence */, arg1:[any] /* [Ljava.lang.CharSequence; */ ):string;
	join( arg0:any /* java.lang.CharSequence */, arg1:java.lang.Iterable<any> ):string;
	valueOf( arg0:any /* char */ ):string;
	valueOf( arg0:any /* java.lang.Object */ ):string;
	valueOf( arg0:boolean ):string;
	valueOf( arg0:chararray ):string;
	valueOf( arg0:chararray, arg1:int, arg2:int ):string;
	valueOf( arg0:double ):string;
	valueOf( arg0:float ):string;
	valueOf( arg0:int ):string;
	valueOf( arg0:long ):string;
}

export const String: StringStatic = Java.type("java.lang.String");


interface ConfigurationElementBuilderStatic {

	readonly class:any;
	create(  ):org.jboss.forge.addon.maven.plugins.ConfigurationElementBuilder;
	create( arg0:org.jboss.forge.addon.maven.plugins.ConfigurationBuilder ):org.jboss.forge.addon.maven.plugins.ConfigurationElementBuilder;
	create( arg0:org.jboss.forge.addon.maven.plugins.ConfigurationElementBuilder ):org.jboss.forge.addon.maven.plugins.ConfigurationElementBuilder;
	createFromExisting( arg0:org.jboss.forge.addon.maven.plugins.ConfigurationElement ):org.jboss.forge.addon.maven.plugins.ConfigurationElementBuilder;
}

export const ConfigurationElementBuilder: ConfigurationElementBuilderStatic = Java.type("org.jboss.forge.addon.maven.plugins.ConfigurationElementBuilder");


interface DependencyQueryBuilderStatic {

	readonly class:any;
	create( arg0:any /* org.jboss.forge.addon.dependencies.DependencyQuery */ ):org.jboss.forge.addon.dependencies.builder.DependencyQueryBuilder;
	create( arg0:org.jboss.forge.addon.dependencies.Coordinate ):org.jboss.forge.addon.dependencies.builder.DependencyQueryBuilder;
	create( arg0:string ):org.jboss.forge.addon.dependencies.builder.DependencyQueryBuilder;
}

export const DependencyQueryBuilder: DependencyQueryBuilderStatic = Java.type("org.jboss.forge.addon.dependencies.builder.DependencyQueryBuilder");


interface IterableStatic {

	readonly class:any;
}

export const Iterable: IterableStatic = Java.type("java.lang.Iterable");


interface RoasterStatic {

	readonly class:any;
	create<T>( arg0:java.lang.Class<any> ):org.jboss.forge.roaster.model.source.JavaSource<any>;
	format( arg0:any /* java.util.Properties */, arg1:string ):string;
	format( arg0:string ):string;
	parse<T>( arg0:any /* java.io.File */ ):any /* org.jboss.forge.roaster.model.JavaType */;
	parse<T>( arg0:any /* java.io.InputStream */ ):any /* org.jboss.forge.roaster.model.JavaType */;
	parse<T>( arg0:any /* java.net.URL */ ):any /* org.jboss.forge.roaster.model.JavaType */;
	parse<T>( arg0:chararray ):any /* org.jboss.forge.roaster.model.JavaType */;
	parse<T>( arg0:java.lang.Class<any>, arg1:any /* java.io.File */ ):any /* org.jboss.forge.roaster.model.JavaType */;
	parse<T>( arg0:java.lang.Class<any>, arg1:any /* java.io.InputStream */ ):any /* org.jboss.forge.roaster.model.JavaType */;
	parse<T>( arg0:java.lang.Class<any>, arg1:any /* java.net.URL */ ):any /* org.jboss.forge.roaster.model.JavaType */;
	parse<T>( arg0:java.lang.Class<any>, arg1:chararray ):any /* org.jboss.forge.roaster.model.JavaType */;
	parse<T>( arg0:java.lang.Class<any>, arg1:string ):any /* org.jboss.forge.roaster.model.JavaType */;
	parse<T>( arg0:string ):any /* org.jboss.forge.roaster.model.JavaType */;
	parseUnit( arg0:any /* java.io.InputStream */ ):any /* org.jboss.forge.roaster.model.JavaUnit */;
	parseUnit( arg0:string ):any /* org.jboss.forge.roaster.model.JavaUnit */;
}

export const Roaster: RoasterStatic = Java.type("org.jboss.forge.roaster.Roaster");


interface CoordinateBuilderStatic {

	readonly class:any;
	create(  ):org.jboss.forge.addon.dependencies.builder.CoordinateBuilder;
	create( arg0:java.util.Map<any, any> ):org.jboss.forge.addon.dependencies.builder.CoordinateBuilder;
	create( arg0:org.jboss.forge.addon.dependencies.Coordinate ):org.jboss.forge.addon.dependencies.builder.CoordinateBuilder;
	create( arg0:string ):org.jboss.forge.addon.dependencies.builder.CoordinateBuilder;
}

export const CoordinateBuilder: CoordinateBuilderStatic = Java.type("org.jboss.forge.addon.dependencies.builder.CoordinateBuilder");


interface CollectionsStatic {

	readonly class:any;
	addAll( arg0:java.util.Collection<any>, arg1:[any] /* [Ljava.lang.Object; */ ):boolean;
	asLifoQueue<E>( arg0:any /* java.util.Deque */ ):any /* java.util.Queue */;
	binarySearch( arg0:java.util.List<any>, arg1:any /* java.lang.Object */ ):int;
	binarySearch( arg0:java.util.List<any>, arg1:any /* java.lang.Object */, arg2:any /* java.util.Comparator */ ):int;
	checkedCollection<E>( arg0:java.util.Collection<any>, arg1:java.lang.Class<any> ):java.util.Collection<any>;
	checkedList<E>( arg0:java.util.List<any>, arg1:java.lang.Class<any> ):java.util.List<any>;
	checkedMap<K,V>( arg0:java.util.Map<any, any>, arg1:java.lang.Class<any>, arg2:java.lang.Class<any> ):java.util.Map<any, any>;
	checkedNavigableMap<K,V>( arg0:any /* java.util.NavigableMap */, arg1:java.lang.Class<any>, arg2:java.lang.Class<any> ):any /* java.util.NavigableMap */;
	checkedNavigableSet<E>( arg0:any /* java.util.NavigableSet */, arg1:java.lang.Class<any> ):any /* java.util.NavigableSet */;
	checkedQueue<E>( arg0:any /* java.util.Queue */, arg1:java.lang.Class<any> ):any /* java.util.Queue */;
	checkedSet<E>( arg0:java.util.Set<any>, arg1:java.lang.Class<any> ):java.util.Set<any>;
	checkedSortedMap<K,V>( arg0:any /* java.util.SortedMap */, arg1:java.lang.Class<any>, arg2:java.lang.Class<any> ):any /* java.util.SortedMap */;
	checkedSortedSet<E>( arg0:any /* java.util.SortedSet */, arg1:java.lang.Class<any> ):any /* java.util.SortedSet */;
	copy( arg0:java.util.List<any>, arg1:java.util.List<any> ):void;
	disjoint( arg0:java.util.Collection<any>, arg1:java.util.Collection<any> ):boolean;
	emptyEnumeration<E>(  ):any /* java.util.Enumeration */;
	emptyIterator<E>(  ):java.util.Iterator<any>;
	emptyList<E>(  ):java.util.List<any>;
	emptyListIterator<E>(  ):any /* java.util.ListIterator */;
	emptyMap<K,V>(  ):java.util.Map<any, any>;
	emptyNavigableMap<K,V>(  ):any /* java.util.NavigableMap */;
	emptyNavigableSet<E>(  ):any /* java.util.NavigableSet */;
	emptySet<E>(  ):java.util.Set<any>;
	emptySortedMap<K,V>(  ):any /* java.util.SortedMap */;
	emptySortedSet<E>(  ):any /* java.util.SortedSet */;
	enumeration<E>( arg0:java.util.Collection<any> ):any /* java.util.Enumeration */;
	fill( arg0:java.util.List<any>, arg1:any /* java.lang.Object */ ):void;
	frequency( arg0:java.util.Collection<any>, arg1:any /* java.lang.Object */ ):int;
	indexOfSubList( arg0:java.util.List<any>, arg1:java.util.List<any> ):int;
	lastIndexOfSubList( arg0:java.util.List<any>, arg1:java.util.List<any> ):int;
	list<E>( arg0:any /* java.util.Enumeration */ ):any /* java.util.ArrayList */;
	max( arg0:java.util.Collection<any> ):any /* java.lang.Object */;
	max( arg0:java.util.Collection<any>, arg1:any /* java.util.Comparator */ ):any /* java.lang.Object */;
	min( arg0:java.util.Collection<any> ):any /* java.lang.Object */;
	min( arg0:java.util.Collection<any>, arg1:any /* java.util.Comparator */ ):any /* java.lang.Object */;
	nCopies<E>( arg0:int, arg1:any /* java.lang.Object */ ):java.util.List<any>;
	newSetFromMap<E>( arg0:java.util.Map<any, any> ):java.util.Set<any>;
	replaceAll( arg0:java.util.List<any>, arg1:any /* java.lang.Object */, arg2:any /* java.lang.Object */ ):boolean;
	reverse( arg0:java.util.List<any> ):void;
	reverseOrder<T>(  ):any /* java.util.Comparator */;
	reverseOrder<T>( arg0:any /* java.util.Comparator */ ):any /* java.util.Comparator */;
	rotate( arg0:java.util.List<any>, arg1:int ):void;
	shuffle( arg0:java.util.List<any> ):void;
	shuffle( arg0:java.util.List<any>, arg1:any /* java.util.Random */ ):void;
	singleton<E>( arg0:any /* java.lang.Object */ ):java.util.Set<any>;
	singletonList<E>( arg0:any /* java.lang.Object */ ):java.util.List<any>;
	singletonMap<K,V>( arg0:any /* java.lang.Object */, arg1:any /* java.lang.Object */ ):java.util.Map<any, any>;
	sort( arg0:java.util.List<any> ):void;
	sort( arg0:java.util.List<any>, arg1:any /* java.util.Comparator */ ):void;
	swap( arg0:java.util.List<any>, arg1:int, arg2:int ):void;
	synchronizedCollection<E>( arg0:java.util.Collection<any> ):java.util.Collection<any>;
	synchronizedList<E>( arg0:java.util.List<any> ):java.util.List<any>;
	synchronizedMap<K,V>( arg0:java.util.Map<any, any> ):java.util.Map<any, any>;
	synchronizedNavigableMap<K,V>( arg0:any /* java.util.NavigableMap */ ):any /* java.util.NavigableMap */;
	synchronizedNavigableSet<E>( arg0:any /* java.util.NavigableSet */ ):any /* java.util.NavigableSet */;
	synchronizedSet<E>( arg0:java.util.Set<any> ):java.util.Set<any>;
	synchronizedSortedMap<K,V>( arg0:any /* java.util.SortedMap */ ):any /* java.util.SortedMap */;
	synchronizedSortedSet<E>( arg0:any /* java.util.SortedSet */ ):any /* java.util.SortedSet */;
	unmodifiableCollection<E>( arg0:java.util.Collection<any> ):java.util.Collection<any>;
	unmodifiableList<E>( arg0:java.util.List<any> ):java.util.List<any>;
	unmodifiableMap<K,V>( arg0:java.util.Map<any, any> ):java.util.Map<any, any>;
	unmodifiableNavigableMap<K,V>( arg0:any /* java.util.NavigableMap */ ):any /* java.util.NavigableMap */;
	unmodifiableNavigableSet<E>( arg0:any /* java.util.NavigableSet */ ):any /* java.util.NavigableSet */;
	unmodifiableSet<E>( arg0:java.util.Set<any> ):java.util.Set<any>;
	unmodifiableSortedMap<K,V>( arg0:any /* java.util.SortedMap */ ):any /* java.util.SortedMap */;
	unmodifiableSortedSet<E>( arg0:any /* java.util.SortedSet */ ):any /* java.util.SortedSet */;
}

export const Collections: CollectionsStatic = Java.type("java.util.Collections");


interface OptionalStatic {

	readonly class:any;
	empty<T>(  ):java.util.Optional<T>;
	of<T>( arg0:any /* java.lang.Object */ ):java.util.Optional<T>;
	ofNullable<T>( arg0:any /* java.lang.Object */ ):java.util.Optional<T>;
}

export const Optional: OptionalStatic = Java.type("java.util.Optional");


interface MavenPluginBuilderStatic {

	readonly class:any;
	create(  ):org.jboss.forge.addon.maven.plugins.MavenPluginBuilder;
	create( arg0:org.jboss.forge.addon.maven.plugins.MavenPlugin ):org.jboss.forge.addon.maven.plugins.MavenPluginBuilder;
}

export const MavenPluginBuilder: MavenPluginBuilderStatic = Java.type("org.jboss.forge.addon.maven.plugins.MavenPluginBuilder");


interface StreamStatic {

	readonly class:any;
	builder<T>(  ):any /* java.util.stream.Stream$Builder */;
	concat<T>( arg0:java.util.stream.Stream<T>, arg1:java.util.stream.Stream<T> ):java.util.stream.Stream<T>;
	empty<T>(  ):java.util.stream.Stream<T>;
	generate<T>( arg0:Supplier<T> ):java.util.stream.Stream<T>;
	iterate<T>( arg0:any /* java.lang.Object */, arg1:UnaryOperator<T> ):java.util.stream.Stream<T>;
	of<T>( arg0:[any] /* [Ljava.lang.Object; */ ):java.util.stream.Stream<T>;
	of<T>( arg0:any /* java.lang.Object */ ):java.util.stream.Stream<T>;
}

export const Stream: StreamStatic = Java.type("java.util.stream.Stream");


interface ExecutionBuilderStatic {

	readonly class:any;
	create(  ):org.jboss.forge.addon.maven.plugins.ExecutionBuilder;
	create( arg0:any /* org.jboss.forge.addon.maven.plugins.ExecutionImpl */ ):org.jboss.forge.addon.maven.plugins.ExecutionBuilder;
}

export const ExecutionBuilder: ExecutionBuilderStatic = Java.type("org.jboss.forge.addon.maven.plugins.ExecutionBuilder");


interface JavaClassSourceStatic {

	readonly class:any;
}

export const JavaClassSource: JavaClassSourceStatic = Java.type("org.jboss.forge.roaster.model.source.JavaClassSource");


interface ConfigurationBuilderStatic {

	readonly class:any;
	create(  ):org.jboss.forge.addon.maven.plugins.ConfigurationBuilder;
	create( arg0:org.jboss.forge.addon.maven.plugins.Configuration, arg1:org.jboss.forge.addon.maven.plugins.MavenPluginBuilder ):org.jboss.forge.addon.maven.plugins.ConfigurationBuilder;
	create( arg0:org.jboss.forge.addon.maven.plugins.MavenPluginBuilder ):org.jboss.forge.addon.maven.plugins.ConfigurationBuilder;
}

export const ConfigurationBuilder: ConfigurationBuilderStatic = Java.type("org.jboss.forge.addon.maven.plugins.ConfigurationBuilder");


