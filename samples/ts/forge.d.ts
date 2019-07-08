/*
 * Project: java2typescript - https://github.com/bsorrentino/java2typescript
 *
 * Author: bsorrentino 
 *
 * TYPESCRIPT DEFINITIONS
 *
 */

type int    = number;
type long   = number;
type float	= number;
type double = number;
type byte   = number;
type char   = string;

type chararray = [byte];
type bytearray = [char];

declare namespace java.lang {

	interface Class<T> {}
	interface AutoCloseable {}
	interface Cloneable {}

	type Object = any;
}

declare namespace java.util {

	interface RandomAccess {}
}

declare namespace java.io {

	interface Closeable {}
	interface Serializable {}
}

//
// Rhino
//

declare const Packages:any;

//
// Nashorn
//

declare function print( ...args: any[] ):void

declare function load( module:string ):void

declare namespace Java {

  export function type<T>( t:string):T;

  export function from<T>( list:java.util.List<T> ):Array<T> ;
  
}
interface Supplier<T>/*java.util.function.Supplier*/ {

	(  ):T;

} // end Supplier
declare namespace org.jboss.forge.addon.dependencies {

interface Dependency {

	getArtifact(  ):any /*org.jboss.forge.addon.resource.FileResource*/;
	getCoordinate(  ):Coordinate;
	getExcludedCoordinates(  ):List<Coordinate>;
	getScopeType(  ):string;
	isOptional(  ):boolean;

} // end Dependency

} // end namespace org.jboss.forge.addon.dependencies
declare namespace java.util {

class Optional<T>/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	filter( arg0:Predicate<T> ):Optional<T>;
	flatMap<U>( arg0:Func<T, Optional<U>> ):Optional<U>;
	get(  ):T;
	ifPresent( arg0:Consumer<T> ):void;
	isPresent(  ):boolean;
	map<U>( arg0:Func<T, U> ):Optional<U>;
	orElse( arg0:T ):T;
	orElseGet( arg0:Supplier<T> ):T;
	orElseThrow<X>( arg0:Supplier<X> ):T;
	toString(  ):string;

} // end Optional

} // end namespace java.util
declare namespace org.jboss.forge.addon.ui.output {

interface UIMessage {

	getDescription(  ):string;
	getSeverity(  ):any /*org.jboss.forge.addon.ui.output.UIMessage$Severity*/;
	getSource(  ):any /*org.jboss.forge.addon.ui.input.InputComponent*/;

} // end UIMessage

} // end namespace org.jboss.forge.addon.ui.output
declare namespace org.jboss.forge.addon.maven.plugins {

class ExecutionBuilder/* extends java.lang.Object implements Execution*/ {

	addGoal( arg0:string ):ExecutionBuilder;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getConfig(  ):Configuration;
	getGoals(  ):List<string>;
	getId(  ):string;
	getPhase(  ):string;
	setConfig( arg0:Configuration ):ExecutionBuilder;
	setId( arg0:string ):ExecutionBuilder;
	setPhase( arg0:string ):ExecutionBuilder;
	toString(  ):string;

} // end ExecutionBuilder

} // end namespace org.jboss.forge.addon.maven.plugins
declare namespace org.jboss.forge.addon.ui.input {

interface UISelectMany<VALUETYPE>/* extends SelectComponent<any, VALUETYPE>, ManyValued<any, VALUETYPE>*/ {

	addValidator<IMPLTYPE>( arg0:any /*org.jboss.forge.addon.ui.validate.UIValidator*/ ):IMPLTYPE;
	addValueChangeListener( arg0:any /*org.jboss.forge.addon.ui.input.ValueChangeListener*/ ):any /*org.jboss.forge.furnace.spi.ListenerRegistration*/;
	getDeprecatedMessage(  ):string;
	getDescription(  ):string;
	getFacet<F>( arg0:java.lang.Class<F> ):F;
	getFacetAsOptional<F>( arg0:java.lang.Class<F> ):java.util.Optional<F>;
	getFacets<F>( arg0:java.lang.Class<F> ):java.lang.Iterable<F>;
	getFacets<FACETTYPE>(  ):java.lang.Iterable<FACETTYPE>;
	getItemLabelConverter(  ):any /*org.jboss.forge.addon.convert.Converter*/;
	getLabel(  ):string;
	getName(  ):string;
	getNote(  ):string;
	getRequiredMessage(  ):string;
	getSelectedIndexes(  ):[int];
	getShortName(  ):any /*char*/;
	getValidators(  ):java.util.Set<any /*org.jboss.forge.addon.ui.validate.UIValidator*/>;
	getValue(  ):any /*java.lang.Object*/;
	getValue(  ):java.lang.Iterable<VALUETYPE>;
	getValueChoices(  ):java.lang.Iterable<VALUETYPE>;
	getValueConverter(  ):any /*org.jboss.forge.addon.convert.Converter*/;
	getValueType(  ):java.lang.Class<VALUETYPE>;
	hasAllFacets<FACETTYPE>( ...arg0:java.lang.Class<FACETTYPE>[] ):boolean;
	hasAllFacets<FACETTYPE>( arg0:java.lang.Iterable<java.lang.Class<FACETTYPE>> ):boolean;
	hasDefaultValue(  ):boolean;
	hasFacet<FACETTYPE>( arg0:java.lang.Class<FACETTYPE> ):boolean;
	hasValue(  ):boolean;
	install<FACETTYPE>( arg0:FACETTYPE ):boolean;
	isDeprecated(  ):boolean;
	isEnabled(  ):boolean;
	isRequired(  ):boolean;
	register<FACETTYPE>( arg0:FACETTYPE ):boolean;
	setDefaultValue<IMPL>( arg0:any /*java.util.concurrent.Callable*/ ):IMPL;
	setDefaultValue<IMPL>( arg0:java.lang.Iterable<VALUETYPE> ):IMPL;
	setDeprecated<IMPLTYPE>( arg0:boolean ):IMPLTYPE;
	setDeprecatedMessage<IMPLTYPE>( arg0:string ):IMPLTYPE;
	setDescription<IMPLTYPE>( arg0:any /*java.util.concurrent.Callable*/ ):IMPLTYPE;
	setDescription<IMPLTYPE>( arg0:string ):IMPLTYPE;
	setEnabled<IMPLTYPE>( arg0:any /*java.util.concurrent.Callable*/ ):IMPLTYPE;
	setEnabled<IMPLTYPE>( arg0:boolean ):IMPLTYPE;
	setItemLabelConverter<IMPLTYPE>( arg0:any /*org.jboss.forge.addon.convert.Converter*/ ):IMPLTYPE;
	setLabel<IMPLTYPE>( arg0:string ):IMPLTYPE;
	setNote<IMPLTYPE>( arg0:any /*java.util.concurrent.Callable*/ ):IMPLTYPE;
	setNote<IMPLTYPE>( arg0:string ):IMPLTYPE;
	setRequired<IMPLTYPE>( arg0:any /*java.util.concurrent.Callable*/ ):IMPLTYPE;
	setRequired<IMPLTYPE>( arg0:boolean ):IMPLTYPE;
	setRequiredMessage<IMPLTYPE>( arg0:any /*java.util.concurrent.Callable*/ ):IMPLTYPE;
	setRequiredMessage<IMPLTYPE>( arg0:string ):IMPLTYPE;
	setValue<IMPL>( arg0:java.lang.Iterable<VALUETYPE> ):IMPL;
	setValueChoices<IMPLTYPE>( arg0:any /*java.util.concurrent.Callable*/ ):IMPLTYPE;
	setValueChoices<IMPLTYPE>( arg0:java.lang.Iterable<VALUETYPE> ):IMPLTYPE;
	setValueConverter<IMPLTYPE>( arg0:any /*org.jboss.forge.addon.convert.Converter*/ ):IMPLTYPE;
	supports<F>( arg0:F ):boolean;
	uninstall<FACETTYPE>( arg0:FACETTYPE ):boolean;
	unregister<FACETTYPE>( arg0:FACETTYPE ):boolean;
	validate( arg0:org.jboss.forge.addon.ui.context.UIValidationContext ):void;

} // end UISelectMany

} // end namespace org.jboss.forge.addon.ui.input
declare namespace java.lang {

class String/* extends Object implements java.io.Serializable, Comparable<any>, CharSequence*/ {

	charAt( arg0:int ):any /*char*/;
	chars(  ):any /*java.util.stream.IntStream*/;
	codePointAt( arg0:int ):int;
	codePointBefore( arg0:int ):int;
	codePointCount( arg0:int, arg1:int ):int;
	codePoints(  ):any /*java.util.stream.IntStream*/;
	compareTo( arg0:string ):int;
	compareToIgnoreCase( arg0:string ):int;
	concat( arg0:string ):string;
	contains( arg0:any /*java.lang.CharSequence*/ ):boolean;
	contentEquals( arg0:any /*java.lang.CharSequence*/ ):boolean;
	contentEquals( arg0:any /*java.lang.StringBuffer*/ ):boolean;
	endsWith( arg0:string ):boolean;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	equalsIgnoreCase( arg0:string ):boolean;
	getBytes(  ):bytearray;
	getBytes( arg0:any /*java.nio.charset.Charset*/ ):bytearray;
	getBytes( arg0:int, arg1:int, arg2:bytearray, arg3:int ):void;
	getBytes( arg0:string ):bytearray;
	getChars( arg0:int, arg1:int, arg2:chararray, arg3:int ):void;
	indexOf( arg0:int ):int;
	indexOf( arg0:int, arg1:int ):int;
	indexOf( arg0:string ):int;
	indexOf( arg0:string, arg1:int ):int;
	intern(  ):string;
	isEmpty(  ):boolean;
	lastIndexOf( arg0:int ):int;
	lastIndexOf( arg0:int, arg1:int ):int;
	lastIndexOf( arg0:string ):int;
	lastIndexOf( arg0:string, arg1:int ):int;
	length(  ):int;
	matches( arg0:string ):boolean;
	offsetByCodePoints( arg0:int, arg1:int ):int;
	regionMatches( arg0:boolean, arg1:int, arg2:string, arg3:int, arg4:int ):boolean;
	regionMatches( arg0:int, arg1:string, arg2:int, arg3:int ):boolean;
	replace( arg0:any /*char*/, arg1:any /*char*/ ):string;
	replace( arg0:any /*java.lang.CharSequence*/, arg1:any /*java.lang.CharSequence*/ ):string;
	replaceAll( arg0:string, arg1:string ):string;
	replaceFirst( arg0:string, arg1:string ):string;
	split( arg0:string ):[string];
	split( arg0:string, arg1:int ):[string];
	startsWith( arg0:string ):boolean;
	startsWith( arg0:string, arg1:int ):boolean;
	subSequence( arg0:int, arg1:int ):any /*java.lang.CharSequence*/;
	substring( arg0:int ):string;
	substring( arg0:int, arg1:int ):string;
	toCharArray(  ):chararray;
	toLowerCase(  ):string;
	toLowerCase( arg0:any /*java.util.Locale*/ ):string;
	toString(  ):string;
	toUpperCase(  ):string;
	toUpperCase( arg0:any /*java.util.Locale*/ ):string;
	trim(  ):string;

} // end String

} // end namespace java.lang
declare namespace org.jboss.forge.addon.ui.context {

interface UIExecutionContext/* extends UIContextProvider*/ {

	getProgressMonitor(  ):org.jboss.forge.addon.ui.progress.UIProgressMonitor;
	getPrompt(  ):org.jboss.forge.addon.ui.input.UIPrompt;
	getUIContext(  ):UIContext;

} // end UIExecutionContext

} // end namespace org.jboss.forge.addon.ui.context
declare namespace org.jboss.forge.addon.dependencies {

interface Coordinate {

	getArtifactId(  ):string;
	getClassifier(  ):string;
	getGroupId(  ):string;
	getPackaging(  ):string;
	getSystemPath(  ):string;
	getVersion(  ):string;
	isSnapshot(  ):boolean;

} // end Coordinate

} // end namespace org.jboss.forge.addon.dependencies
declare namespace org.jboss.forge.addon.maven.plugins {

class ConfigurationBuilder/* extends java.lang.Object implements Configuration*/ {

	addConfigurationElement( arg0:ConfigurationElement ):Configuration;
	createConfigurationElement( arg0:string ):ConfigurationElementBuilder;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getConfigurationElement( arg0:string ):ConfigurationElement;
	getOrigin(  ):MavenPluginBuilder;
	hasConfigurationElement( arg0:string ):boolean;
	hasConfigurationElements(  ):boolean;
	listConfigurationElements(  ):List<ConfigurationElement>;
	removeConfigurationElement( arg0:string ):void;
	toString(  ):string;

} // end ConfigurationBuilder

} // end namespace org.jboss.forge.addon.maven.plugins
declare namespace org.jboss.forge.addon.maven.plugins {

interface ConfigurationElement/* extends PluginElement*/ {

	getAttributes(  ):java.util.Map<string, string>;
	getChildByContent( arg0:string ):ConfigurationElement;
	getChildByContent( arg0:string, arg1:boolean ):ConfigurationElement;
	getChildByName( arg0:string ):ConfigurationElement;
	getChildByName( arg0:string, arg1:boolean ):ConfigurationElement;
	getChildren(  ):List<PluginElement>;
	getName(  ):string;
	getText(  ):string;
	hasChildByContent( arg0:string ):boolean;
	hasChildByContent( arg0:string, arg1:boolean ):boolean;
	hasChildByName( arg0:string ):boolean;
	hasChildByName( arg0:string, arg1:boolean ):boolean;
	hasChildren(  ):boolean;
	isPlugin(  ):boolean;

} // end ConfigurationElement

} // end namespace org.jboss.forge.addon.maven.plugins
declare namespace org.jboss.forge.addon.maven.dependencies {

class MavenDependencyAdapter/* extends org.apache.maven.model.Dependency implements org.jboss.forge.addon.dependencies.Dependency*/ {

	addExclusion( arg0:org.apache.maven.model.Exclusion ):void;
	clone(  ):org.apache.maven.model.Dependency;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getArtifact(  ):any /*org.jboss.forge.addon.resource.FileResource*/;
	getArtifactId(  ):string;
	getClassifier(  ):string;
	getCoordinate(  ):org.jboss.forge.addon.dependencies.Coordinate;
	getExcludedCoordinates(  ):List<org.jboss.forge.addon.dependencies.Coordinate>;
	getExclusions(  ):List<org.apache.maven.model.Exclusion>;
	getGroupId(  ):string;
	getLocation( arg0:any /*java.lang.Object*/ ):any /*org.apache.maven.model.InputLocation*/;
	getManagementKey(  ):string;
	getOptional(  ):string;
	getScope(  ):string;
	getScopeType(  ):string;
	getSystemPath(  ):string;
	getType(  ):string;
	getVersion(  ):string;
	isOptional(  ):boolean;
	removeExclusion( arg0:org.apache.maven.model.Exclusion ):void;
	setArtifactId( arg0:string ):void;
	setClassifier( arg0:string ):void;
	setExclusions( arg0:List<org.apache.maven.model.Exclusion> ):void;
	setGroupId( arg0:string ):void;
	setLocation( arg0:any /*java.lang.Object*/, arg1:any /*org.apache.maven.model.InputLocation*/ ):void;
	setOptional( arg0:boolean ):void;
	setOptional( arg0:string ):void;
	setScope( arg0:string ):void;
	setSystemPath( arg0:string ):void;
	setType( arg0:string ):void;
	setVersion( arg0:string ):void;
	toString(  ):string;

} // end MavenDependencyAdapter

} // end namespace org.jboss.forge.addon.maven.dependencies
declare namespace org.jboss.forge.addon.ui.metadata {

interface UICommandMetadata {

	getCategory(  ):any /*org.jboss.forge.addon.ui.metadata.UICategory*/;
	getDeprecatedMessage(  ):string;
	getDescription(  ):string;
	getDocLocation(  ):any /*java.net.URL*/;
	getLongDescription(  ):string;
	getName(  ):string;
	getType(  ):java.lang.Class<any /*java.lang.Object*/>;
	isDeprecated(  ):boolean;

} // end UICommandMetadata

} // end namespace org.jboss.forge.addon.ui.metadata
declare namespace java.util.stream {

interface Stream<T>/* extends BaseStream<T, any>*/ {

	allMatch( arg0:Predicate<T> ):boolean;
	anyMatch( arg0:Predicate<T> ):boolean;
	close(  ):void;
	collect<R>( arg0:Supplier<R>, arg1:BiConsumer<R, T>, arg2:BiConsumer<R, R> ):R;
	collect<R>( arg0:any /*java.util.stream.Collector*/ ):R;
	count(  ):long;
	distinct(  ):Stream<T>;
	filter( arg0:Predicate<T> ):Stream<T>;
	findAny(  ):java.util.Optional<T>;
	findFirst(  ):java.util.Optional<T>;
	flatMap<R>( arg0:Func<T, Stream<R>> ):Stream<R>;
	flatMapToDouble( arg0:Func<T, any /*java.util.stream.DoubleStream*/> ):any /*java.util.stream.DoubleStream*/;
	flatMapToInt( arg0:Func<T, any /*java.util.stream.IntStream*/> ):any /*java.util.stream.IntStream*/;
	flatMapToLong( arg0:Func<T, any /*java.util.stream.LongStream*/> ):any /*java.util.stream.LongStream*/;
	forEach( arg0:Consumer<T> ):void;
	forEachOrdered( arg0:Consumer<T> ):void;
	isParallel(  ):boolean;
	iterator(  ):java.util.Iterator<T>;
	limit( arg0:long ):Stream<T>;
	map<R>( arg0:Func<T, R> ):Stream<R>;
	mapToDouble( arg0:any /*java.util.function.ToDoubleFunction*/ ):any /*java.util.stream.DoubleStream*/;
	mapToInt( arg0:any /*java.util.function.ToIntFunction*/ ):any /*java.util.stream.IntStream*/;
	mapToLong( arg0:any /*java.util.function.ToLongFunction*/ ):any /*java.util.stream.LongStream*/;
	max( arg0:any /*java.util.Comparator*/ ):java.util.Optional<T>;
	min( arg0:any /*java.util.Comparator*/ ):java.util.Optional<T>;
	noneMatch( arg0:Predicate<T> ):boolean;
	onClose<S>( arg0:java.lang.Runnable ):S;
	parallel<S>(  ):S;
	peek( arg0:Consumer<T> ):Stream<T>;
	reduce( arg0:BinaryOperator<T> ):java.util.Optional<T>;
	reduce( arg0:T, arg1:BinaryOperator<T> ):T;
	reduce<U>( arg0:U, arg1:BiFunction<U, T, U>, arg2:BinaryOperator<U> ):U;
	sequential<S>(  ):S;
	skip( arg0:long ):Stream<T>;
	sorted(  ):Stream<T>;
	sorted( arg0:any /*java.util.Comparator*/ ):Stream<T>;
	spliterator(  ):any /*java.util.Spliterator*/;
	toArray(  ):[any /*java.lang.Object*/];
	toArray<A>( arg0:any /*java.util.function.IntFunction*/ ):[A];
	unordered<S>(  ):S;

} // end Stream

} // end namespace java.util.stream
declare namespace java.lang {

interface Comparable<T> {

	compareTo( arg0:T ):int;

} // end Comparable

} // end namespace java.lang
declare namespace org.jboss.forge.addon.ui.result {

interface NavigationResult {

	getNext(  ):[any /*org.jboss.forge.addon.ui.result.NavigationResultEntry*/];

} // end NavigationResult

} // end namespace org.jboss.forge.addon.ui.result
interface BinaryOperator<T>/*java.util.function.BinaryOperator extends BiFunction<T, any, any>*/ {

	<R,U>( arg0:T, arg1:U ):R;
	// static maxBy<T>( arg0:any /*java.util.Comparator*/ ):BinaryOperator<T>;
	// static minBy<T>( arg0:any /*java.util.Comparator*/ ):BinaryOperator<T>;
	andThen?<R,U,V>( arg0:Func<R, V> ):BiFunction<T, U, V>;

} // end BinaryOperator
declare namespace org.jboss.forge.addon.ui.result {

interface Result {

	getEntity(  ):java.util.Optional<any /*java.lang.Object*/>;
	getMessage(  ):string;

} // end Result

} // end namespace org.jboss.forge.addon.ui.result
declare namespace java.lang {

interface Runnable {

	(  ):void;

} // end Runnable

} // end namespace java.lang
interface Func<T, R>/*java.util.function.Function*/ {

	( arg0:T ):R;
	// static identity<T>(  ):Func<T, T>;
	andThen?<V>( arg0:Func<R, V> ):Func<T, V>;
	compose?<V>( arg0:Func<V, T> ):Func<V, R>;

} // end Func
declare namespace org.jboss.forge.addon.maven.plugins {

class ConfigurationElementBuilder/* extends java.lang.Object implements ConfigurationElement*/ {

	addAttribute( arg0:string, arg1:string ):ConfigurationElementBuilder;
	addChild( arg0:PluginElement ):ConfigurationElementBuilder;
	addChild( arg0:string ):ConfigurationElementBuilder;
	createConfigurationElement( arg0:string ):ConfigurationElementBuilder;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getAttributes(  ):java.util.Map<string, string>;
	getChildByContent( arg0:string ):ConfigurationElement;
	getChildByContent( arg0:string, arg1:boolean ):ConfigurationElement;
	getChildByName( arg0:string ):ConfigurationElement;
	getChildByName( arg0:string, arg1:boolean ):ConfigurationElement;
	getChildren(  ):List<PluginElement>;
	getName(  ):string;
	getParentElement(  ):ConfigurationElementBuilder;
	getParentPluginConfig(  ):ConfigurationBuilder;
	getText(  ):string;
	hasChildByContent( arg0:string ):boolean;
	hasChildByContent( arg0:string, arg1:boolean ):boolean;
	hasChildByName( arg0:string ):boolean;
	hasChildByName( arg0:string, arg1:boolean ):boolean;
	hasChildren(  ):boolean;
	isPlugin(  ):boolean;
	removeAttribute( arg0:string ):ConfigurationElementBuilder;
	setName( arg0:string ):ConfigurationElementBuilder;
	setText( arg0:string ):ConfigurationElementBuilder;
	toString(  ):string;

} // end ConfigurationElementBuilder

} // end namespace org.jboss.forge.addon.maven.plugins
declare namespace java.util {

class Collections/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	toString(  ):string;

} // end Collections

} // end namespace java.util
declare namespace org.jboss.forge.addon.dependencies {

interface DependencyResolver {

	resolveArtifact( arg0:any /*org.jboss.forge.addon.dependencies.DependencyQuery*/ ):Dependency;
	resolveDependencies( arg0:any /*org.jboss.forge.addon.dependencies.DependencyQuery*/ ):java.util.Set<Dependency>;
	resolveDependencyHierarchy( arg0:any /*org.jboss.forge.addon.dependencies.DependencyQuery*/ ):any /*org.jboss.forge.addon.dependencies.DependencyNode*/;
	resolveDependencyMetadata( arg0:any /*org.jboss.forge.addon.dependencies.DependencyQuery*/ ):any /*org.jboss.forge.addon.dependencies.DependencyMetadata*/;
	resolveVersions( arg0:any /*org.jboss.forge.addon.dependencies.DependencyQuery*/ ):List<Coordinate>;

} // end DependencyResolver

} // end namespace org.jboss.forge.addon.dependencies
declare namespace org.jboss.forge.addon.ui.input {

interface UISelectOne<VALUETYPE>/* extends SelectComponent<any, VALUETYPE>, SingleValued<any, VALUETYPE>*/ {

	addValidator<IMPLTYPE>( arg0:any /*org.jboss.forge.addon.ui.validate.UIValidator*/ ):IMPLTYPE;
	addValueChangeListener( arg0:any /*org.jboss.forge.addon.ui.input.ValueChangeListener*/ ):any /*org.jboss.forge.furnace.spi.ListenerRegistration*/;
	getDeprecatedMessage(  ):string;
	getDescription(  ):string;
	getFacet<F>( arg0:java.lang.Class<F> ):F;
	getFacetAsOptional<F>( arg0:java.lang.Class<F> ):java.util.Optional<F>;
	getFacets<F>( arg0:java.lang.Class<F> ):java.lang.Iterable<F>;
	getFacets<FACETTYPE>(  ):java.lang.Iterable<FACETTYPE>;
	getItemLabelConverter(  ):any /*org.jboss.forge.addon.convert.Converter*/;
	getLabel(  ):string;
	getName(  ):string;
	getNote(  ):string;
	getRequiredMessage(  ):string;
	getSelectedIndex(  ):int;
	getShortName(  ):any /*char*/;
	getValidators(  ):java.util.Set<any /*org.jboss.forge.addon.ui.validate.UIValidator*/>;
	getValue(  ):VALUETYPE;
	getValue(  ):any /*java.lang.Object*/;
	getValueChoices(  ):java.lang.Iterable<VALUETYPE>;
	getValueConverter(  ):any /*org.jboss.forge.addon.convert.Converter*/;
	getValueType(  ):java.lang.Class<VALUETYPE>;
	hasAllFacets<FACETTYPE>( ...arg0:java.lang.Class<FACETTYPE>[] ):boolean;
	hasAllFacets<FACETTYPE>( arg0:java.lang.Iterable<java.lang.Class<FACETTYPE>> ):boolean;
	hasDefaultValue(  ):boolean;
	hasFacet<FACETTYPE>( arg0:java.lang.Class<FACETTYPE> ):boolean;
	hasValue(  ):boolean;
	install<FACETTYPE>( arg0:FACETTYPE ):boolean;
	isDeprecated(  ):boolean;
	isEnabled(  ):boolean;
	isRequired(  ):boolean;
	register<FACETTYPE>( arg0:FACETTYPE ):boolean;
	setDefaultValue<IMPL>( arg0:VALUETYPE ):IMPL;
	setDefaultValue<IMPL>( arg0:any /*java.util.concurrent.Callable*/ ):IMPL;
	setDeprecated<IMPLTYPE>( arg0:boolean ):IMPLTYPE;
	setDeprecatedMessage<IMPLTYPE>( arg0:string ):IMPLTYPE;
	setDescription<IMPLTYPE>( arg0:any /*java.util.concurrent.Callable*/ ):IMPLTYPE;
	setDescription<IMPLTYPE>( arg0:string ):IMPLTYPE;
	setEnabled<IMPLTYPE>( arg0:any /*java.util.concurrent.Callable*/ ):IMPLTYPE;
	setEnabled<IMPLTYPE>( arg0:boolean ):IMPLTYPE;
	setItemLabelConverter<IMPLTYPE>( arg0:any /*org.jboss.forge.addon.convert.Converter*/ ):IMPLTYPE;
	setLabel<IMPLTYPE>( arg0:string ):IMPLTYPE;
	setNote<IMPLTYPE>( arg0:any /*java.util.concurrent.Callable*/ ):IMPLTYPE;
	setNote<IMPLTYPE>( arg0:string ):IMPLTYPE;
	setRequired<IMPLTYPE>( arg0:any /*java.util.concurrent.Callable*/ ):IMPLTYPE;
	setRequired<IMPLTYPE>( arg0:boolean ):IMPLTYPE;
	setRequiredMessage<IMPLTYPE>( arg0:any /*java.util.concurrent.Callable*/ ):IMPLTYPE;
	setRequiredMessage<IMPLTYPE>( arg0:string ):IMPLTYPE;
	setValue<IMPL>( arg0:VALUETYPE ):IMPL;
	setValueChoices<IMPLTYPE>( arg0:any /*java.util.concurrent.Callable*/ ):IMPLTYPE;
	setValueChoices<IMPLTYPE>( arg0:java.lang.Iterable<VALUETYPE> ):IMPLTYPE;
	setValueConverter<IMPLTYPE>( arg0:any /*org.jboss.forge.addon.convert.Converter*/ ):IMPLTYPE;
	supports<F>( arg0:F ):boolean;
	uninstall<FACETTYPE>( arg0:FACETTYPE ):boolean;
	unregister<FACETTYPE>( arg0:FACETTYPE ):boolean;
	validate( arg0:org.jboss.forge.addon.ui.context.UIValidationContext ):void;

} // end UISelectOne

} // end namespace org.jboss.forge.addon.ui.input
declare namespace org.jboss.forge.addon.ui.wizard {

interface UIWizard/* extends org.jboss.forge.addon.ui.command.UICommand*/ {

	execute( arg0:org.jboss.forge.addon.ui.context.UIExecutionContext ):org.jboss.forge.addon.ui.result.Result;
	getMetadata( arg0:org.jboss.forge.addon.ui.context.UIContext ):org.jboss.forge.addon.ui.metadata.UICommandMetadata;
	initializeUI( arg0:org.jboss.forge.addon.ui.context.UIBuilder ):void;
	isEnabled( arg0:org.jboss.forge.addon.ui.context.UIContext ):boolean;
	next( arg0:org.jboss.forge.addon.ui.context.UINavigationContext ):org.jboss.forge.addon.ui.result.NavigationResult;
	validate( arg0:org.jboss.forge.addon.ui.context.UIValidationContext ):void;

} // end UIWizard

} // end namespace org.jboss.forge.addon.ui.wizard
declare namespace java.util {

interface Iterator<E> {

	forEachRemaining( arg0:Consumer<E> ):void;
	hasNext(  ):boolean;
	next(  ):E;
	remove(  ):void;

} // end Iterator

} // end namespace java.util
declare namespace org.jboss.forge.addon.projects {

interface Project/* extends org.jboss.forge.addon.facets.Faceted<any>*/ {

	getAttribute( arg0:any /*java.lang.Object*/ ):any /*java.lang.Object*/;
	getFacet<F>( arg0:java.lang.Class<F> ):F;
	getFacetAsOptional<F>( arg0:java.lang.Class<F> ):java.util.Optional<F>;
	getFacets<F>( arg0:java.lang.Class<F> ):java.lang.Iterable<F>;
	getFacets<FACETTYPE>(  ):java.lang.Iterable<FACETTYPE>;
	getRoot(  ):any /*org.jboss.forge.addon.resource.Resource*/;
	getRootDirectory(  ):any /*org.jboss.forge.addon.resource.DirectoryResource*/;
	getStack(  ):java.util.Optional<any /*org.jboss.forge.addon.projects.stacks.Stack*/>;
	hasAllFacets<FACETTYPE>( ...arg0:java.lang.Class<FACETTYPE>[] ):boolean;
	hasAllFacets<FACETTYPE>( arg0:java.lang.Iterable<java.lang.Class<FACETTYPE>> ):boolean;
	hasFacet<FACETTYPE>( arg0:java.lang.Class<FACETTYPE> ):boolean;
	removeAttribute( arg0:any /*java.lang.Object*/ ):void;
	setAttribute( arg0:any /*java.lang.Object*/, arg1:any /*java.lang.Object*/ ):void;
	supports<F>( arg0:F ):boolean;

} // end Project

} // end namespace org.jboss.forge.addon.projects
declare namespace org.jboss.forge.addon.maven.plugins {

interface Configuration/* extends PluginElement*/ {

	addConfigurationElement( arg0:ConfigurationElement ):Configuration;
	getConfigurationElement( arg0:string ):ConfigurationElement;
	hasConfigurationElement( arg0:string ):boolean;
	hasConfigurationElements(  ):boolean;
	listConfigurationElements(  ):List<ConfigurationElement>;
	removeConfigurationElement( arg0:string ):void;

} // end Configuration

} // end namespace org.jboss.forge.addon.maven.plugins
declare namespace org.jboss.forge.roaster {

class Roaster/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	toString(  ):string;

} // end Roaster

} // end namespace org.jboss.forge.roaster
declare namespace org.jboss.forge.addon.ui.context {

interface UINavigationContext/* extends UIContextProvider*/ {

	getCurrentCommand(  ):org.jboss.forge.addon.ui.command.UICommand;
	getInitialCommand(  ):org.jboss.forge.addon.ui.command.UICommand;
	getUIContext(  ):UIContext;
	navigateTo( arg0:java.lang.Class<org.jboss.forge.addon.ui.command.UICommand>, ...arg1:java.lang.Class<org.jboss.forge.addon.ui.command.UICommand>[] ):org.jboss.forge.addon.ui.result.NavigationResult;

} // end UINavigationContext

} // end namespace org.jboss.forge.addon.ui.context
declare namespace org.jboss.forge.addon.maven.projects {

interface MavenFacet/* extends org.jboss.forge.addon.projects.ProvidedProjectFacet*/ {

	executeMaven( arg0:List<string> ):boolean;
	executeMavenEmbedded( arg0:List<string> ):boolean;
	executeMavenEmbedded( arg0:List<string>, arg1:any /*java.io.PrintStream*/, arg2:any /*java.io.PrintStream*/ ):boolean;
	getEffectiveModel(  ):org.apache.maven.model.Model;
	getEffectiveModelBuildResult(  ):any /*org.jboss.forge.addon.projects.building.BuildResult*/;
	getFaceted<FACETEDTYPE>(  ):FACETEDTYPE;
	getLocalRepositoryDirectory(  ):any /*org.jboss.forge.addon.resource.DirectoryResource*/;
	getModel(  ):org.apache.maven.model.Model;
	getModelResource(  ):any /*org.jboss.forge.addon.maven.resources.MavenModelResource*/;
	getProperties(  ):java.util.Map<string, string>;
	install(  ):boolean;
	isInstalled(  ):boolean;
	isModelValid(  ):boolean;
	resolveProperties( arg0:string ):string;
	setModel( arg0:org.apache.maven.model.Model ):void;
	uninstall(  ):boolean;

} // end MavenFacet

} // end namespace org.jboss.forge.addon.maven.projects
declare namespace org.apache.maven.model {

class Exclusion/* extends java.lang.Object implements java.io.Serializable, java.lang.Cloneable, InputLocationTracker*/ {

	clone(  ):Exclusion;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getArtifactId(  ):string;
	getGroupId(  ):string;
	getLocation( arg0:any /*java.lang.Object*/ ):any /*org.apache.maven.model.InputLocation*/;
	setArtifactId( arg0:string ):void;
	setGroupId( arg0:string ):void;
	setLocation( arg0:any /*java.lang.Object*/, arg1:any /*org.apache.maven.model.InputLocation*/ ):void;
	toString(  ):string;

} // end Exclusion

} // end namespace org.apache.maven.model
declare namespace org.jboss.forge.addon.ui.progress {

interface UIProgressMonitor {

	beginTask( arg0:string, arg1:int ):void;
	done(  ):void;
	isCancelled(  ):boolean;
	setCancelled( arg0:boolean ):void;
	setTaskName( arg0:string ):void;
	subTask( arg0:string ):void;
	worked( arg0:int ):void;

} // end UIProgressMonitor

} // end namespace org.jboss.forge.addon.ui.progress
declare namespace org.jboss.forge.addon.ui.context {

interface UIValidationContext/* extends UIContextProvider*/ {

	addValidationError( arg0:any /*org.jboss.forge.addon.ui.input.InputComponent*/, arg1:string ):void;
	addValidationInformation( arg0:any /*org.jboss.forge.addon.ui.input.InputComponent*/, arg1:string ):void;
	addValidationWarning( arg0:any /*org.jboss.forge.addon.ui.input.InputComponent*/, arg1:string ):void;
	getCurrentInputComponent(  ):any /*org.jboss.forge.addon.ui.input.InputComponent*/;
	getMessages(  ):List<org.jboss.forge.addon.ui.output.UIMessage>;
	getUIContext(  ):UIContext;

} // end UIValidationContext

} // end namespace org.jboss.forge.addon.ui.context
declare namespace org.jboss.forge.addon.ui.wizard {

interface UIWizardStep/* extends UIWizard*/ {

	execute( arg0:org.jboss.forge.addon.ui.context.UIExecutionContext ):org.jboss.forge.addon.ui.result.Result;
	getMetadata( arg0:org.jboss.forge.addon.ui.context.UIContext ):org.jboss.forge.addon.ui.metadata.UICommandMetadata;
	initializeUI( arg0:org.jboss.forge.addon.ui.context.UIBuilder ):void;
	isEnabled( arg0:org.jboss.forge.addon.ui.context.UIContext ):boolean;
	next( arg0:org.jboss.forge.addon.ui.context.UINavigationContext ):org.jboss.forge.addon.ui.result.NavigationResult;
	validate( arg0:org.jboss.forge.addon.ui.context.UIValidationContext ):void;

} // end UIWizardStep

} // end namespace org.jboss.forge.addon.ui.wizard
declare namespace java.util {

interface Map<K, V> {

	clear(  ):void;
	compute( arg0:K, arg1:BiFunction<K, V, V> ):V;
	computeIfAbsent( arg0:K, arg1:Func<K, V> ):V;
	computeIfPresent( arg0:K, arg1:BiFunction<K, V, V> ):V;
	containsKey( arg0:any /*java.lang.Object*/ ):boolean;
	containsValue( arg0:any /*java.lang.Object*/ ):boolean;
	entrySet(  ):Set<any /*java.util.Map$Entry*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	forEach( arg0:BiConsumer<K, V> ):void;
	get( arg0:any /*java.lang.Object*/ ):V;
	getOrDefault( arg0:any /*java.lang.Object*/, arg1:V ):V;
	isEmpty(  ):boolean;
	keySet(  ):Set<K>;
	merge( arg0:K, arg1:V, arg2:BiFunction<V, V, V> ):V;
	put( arg0:K, arg1:V ):V;
	putAll( arg0:Map<K, V> ):void;
	putIfAbsent( arg0:K, arg1:V ):V;
	remove( arg0:any /*java.lang.Object*/ ):V;
	remove( arg0:any /*java.lang.Object*/, arg1:any /*java.lang.Object*/ ):boolean;
	replace( arg0:K, arg1:V ):V;
	replace( arg0:K, arg1:V, arg2:V ):boolean;
	replaceAll( arg0:BiFunction<K, V, V> ):void;
	size(  ):int;
	values(  ):Collection<V>;

} // end Map

} // end namespace java.util
declare namespace org.jboss.forge.addon.ui.context {

interface UIContext/* extends java.lang.AutoCloseable*/ {

	addCommandExecutionListener( arg0:org.jboss.forge.addon.ui.command.CommandExecutionListener ):any /*org.jboss.forge.furnace.spi.ListenerRegistration*/;
	close(  ):void;
	getAttributeMap(  ):java.util.Map<any /*java.lang.Object*/, any /*java.lang.Object*/>;
	getInitialSelection(  ):any /*org.jboss.forge.addon.ui.context.UISelection*/;
	getListeners(  ):java.util.Set<org.jboss.forge.addon.ui.command.CommandExecutionListener>;
	getProvider(  ):any /*org.jboss.forge.addon.ui.UIProvider*/;
	getSelection(  ):any /*org.jboss.forge.addon.ui.context.UISelection*/;
	setSelection( arg0:any /*org.jboss.forge.addon.ui.context.UISelection*/ ):void;
	setSelection<SELECTIONTYPE>( arg0:SELECTIONTYPE ):void;

} // end UIContext

} // end namespace org.jboss.forge.addon.ui.context
interface Consumer<T>/*java.util.function.Consumer*/ {

	( arg0:T ):void;
	andThen?( arg0:Consumer<T> ):Consumer<T>;

} // end Consumer
declare namespace org.jboss.forge.roaster.model.source {

interface JavaSource<T>/* extends org.jboss.forge.roaster.model.JavaType<T>, PackagedSource<T>, Importer<T>, NamedSource<T>, VisibilityScopedSource<T>, AnnotationTargetSource<any, T>, JavaDocCapableSource<T>*/ {

	addAnnotation(  ):any /*org.jboss.forge.roaster.model.source.AnnotationSource*/;
	addAnnotation( arg0:java.lang.Class<any /*java.lang.annotation.Annotation*/> ):any /*org.jboss.forge.roaster.model.source.AnnotationSource*/;
	addAnnotation( arg0:string ):any /*org.jboss.forge.roaster.model.source.AnnotationSource*/;
	addImport( arg0:T ):any /*org.jboss.forge.roaster.model.source.Import*/;
	addImport( arg0:any /*org.jboss.forge.roaster.model.Type*/ ):any /*org.jboss.forge.roaster.model.source.Import*/;
	addImport( arg0:any /*org.jboss.forge.roaster.model.source.Import*/ ):any /*org.jboss.forge.roaster.model.source.Import*/;
	addImport( arg0:java.lang.Class<any /*java.lang.Object*/> ):any /*org.jboss.forge.roaster.model.source.Import*/;
	addImport( arg0:string ):any /*org.jboss.forge.roaster.model.source.Import*/;
	getAnnotation( arg0:java.lang.Class<any /*java.lang.annotation.Annotation*/> ):any /*org.jboss.forge.roaster.model.Annotation*/;
	getAnnotation( arg0:java.lang.Class<any /*java.lang.annotation.Annotation*/> ):any /*org.jboss.forge.roaster.model.source.AnnotationSource*/;
	getAnnotation( arg0:string ):any /*org.jboss.forge.roaster.model.Annotation*/;
	getAnnotation( arg0:string ):any /*org.jboss.forge.roaster.model.source.AnnotationSource*/;
	getAnnotations(  ):List<any /*org.jboss.forge.roaster.model.Annotation*/>;
	getAnnotations(  ):List<any /*org.jboss.forge.roaster.model.source.AnnotationSource*/>;
	getCanonicalName(  ):string;
	getEnclosingType(  ):JavaSource<any /*java.lang.Object*/>;
	getEnclosingType(  ):any /*org.jboss.forge.roaster.model.JavaType*/;
	getImport( arg0:T ):any /*org.jboss.forge.roaster.model.source.Import*/;
	getImport( arg0:any /*org.jboss.forge.roaster.model.source.Import*/ ):any /*org.jboss.forge.roaster.model.source.Import*/;
	getImport( arg0:java.lang.Class<any /*java.lang.Object*/> ):any /*org.jboss.forge.roaster.model.source.Import*/;
	getImport( arg0:string ):any /*org.jboss.forge.roaster.model.source.Import*/;
	getImports(  ):List<any /*org.jboss.forge.roaster.model.source.Import*/>;
	getInternal(  ):any /*java.lang.Object*/;
	getJavaDoc(  ):any /*org.jboss.forge.roaster.model.JavaDoc*/;
	getJavaDoc(  ):any /*org.jboss.forge.roaster.model.source.JavaDocSource*/;
	getName(  ):string;
	getOrigin(  ):T;
	getPackage(  ):string;
	getQualifiedName(  ):string;
	getSyntaxErrors(  ):List<any /*org.jboss.forge.roaster.model.SyntaxError*/>;
	getVisibility(  ):any /*org.jboss.forge.roaster.model.Visibility*/;
	hasAnnotation( arg0:java.lang.Class<any /*java.lang.annotation.Annotation*/> ):boolean;
	hasAnnotation( arg0:string ):boolean;
	hasImport( arg0:T ):boolean;
	hasImport( arg0:any /*org.jboss.forge.roaster.model.source.Import*/ ):boolean;
	hasImport( arg0:java.lang.Class<any /*java.lang.Object*/> ):boolean;
	hasImport( arg0:string ):boolean;
	hasJavaDoc(  ):boolean;
	hasSyntaxErrors(  ):boolean;
	isAnnotation(  ):boolean;
	isClass(  ):boolean;
	isDefaultPackage(  ):boolean;
	isEnum(  ):boolean;
	isInterface(  ):boolean;
	isPackagePrivate(  ):boolean;
	isPrivate(  ):boolean;
	isProtected(  ):boolean;
	isPublic(  ):boolean;
	removeAllAnnotations(  ):void;
	removeAnnotation( arg0:any /*org.jboss.forge.roaster.model.Annotation*/ ):T;
	removeImport<O>( arg0:T ):O;
	removeImport<O>( arg0:any /*org.jboss.forge.roaster.model.source.Import*/ ):O;
	removeImport<O>( arg0:java.lang.Class<any /*java.lang.Object*/> ):O;
	removeImport<O>( arg0:string ):O;
	removeJavaDoc<O>(  ):O;
	requiresImport( arg0:java.lang.Class<any /*java.lang.Object*/> ):boolean;
	requiresImport( arg0:string ):boolean;
	resolveType( arg0:string ):string;
	setDefaultPackage(  ):T;
	setName( arg0:string ):T;
	setPackage( arg0:string ):T;
	setPackagePrivate(  ):T;
	setPrivate(  ):T;
	setProtected(  ):T;
	setPublic(  ):T;
	setVisibility( arg0:any /*org.jboss.forge.roaster.model.Visibility*/ ):T;
	toUnformattedString(  ):string;

} // end JavaSource

} // end namespace org.jboss.forge.roaster.model.source
interface Predicate<T>/*java.util.function.Predicate*/ {

	( arg0:T ):boolean;
	// static isEqual<T>( arg0:any /*java.lang.Object*/ ):Predicate<T>;
	and?( arg0:Predicate<T> ):Predicate<T>;
	negate?(  ):Predicate<T>;
	or?( arg0:Predicate<T> ):Predicate<T>;

} // end Predicate
declare namespace org.jboss.forge.addon.maven.plugins {

class MavenPluginBuilder/* extends java.lang.Object implements MavenPlugin, PluginElement*/ {

	addExecution( arg0:Execution ):MavenPluginBuilder;
	addPluginDependency( arg0:org.jboss.forge.addon.dependencies.Dependency ):MavenPluginBuilder;
	createConfiguration(  ):ConfigurationBuilder;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getConfig(  ):Configuration;
	getCoordinate(  ):org.jboss.forge.addon.dependencies.Coordinate;
	getDirectDependencies(  ):List<org.jboss.forge.addon.dependencies.Dependency>;
	isExtensionsEnabled(  ):boolean;
	listExecutions(  ):List<Execution>;
	setConfiguration( arg0:Configuration ):MavenPluginBuilder;
	setCoordinate( arg0:org.jboss.forge.addon.dependencies.Coordinate ):MavenPluginBuilder;
	setExtensions( arg0:boolean ):MavenPluginBuilder;
	toString(  ):string;

} // end MavenPluginBuilder

} // end namespace org.jboss.forge.addon.maven.plugins
declare namespace org.jboss.forge.addon.ui.command {

interface CommandExecutionListener {

	postCommandExecuted( arg0:UICommand, arg1:org.jboss.forge.addon.ui.context.UIExecutionContext, arg2:org.jboss.forge.addon.ui.result.Result ):void;
	postCommandFailure( arg0:UICommand, arg1:org.jboss.forge.addon.ui.context.UIExecutionContext, arg2:any /*java.lang.Throwable*/ ):void;
	preCommandExecuted( arg0:UICommand, arg1:org.jboss.forge.addon.ui.context.UIExecutionContext ):void;

} // end CommandExecutionListener

} // end namespace org.jboss.forge.addon.ui.command
declare namespace java.lang {

interface Iterable<T> {

	(  ):java.util.Iterator<T>;
	forEach?( arg0:Consumer<T> ):void;
	spliterator?(  ):any /*java.util.Spliterator*/;

} // end Iterable

} // end namespace java.lang
declare namespace java.util {

interface Collection<E>/* extends java.lang.Iterable<E>*/ {

	add( arg0:E ):boolean;
	addAll( arg0:Collection<E> ):boolean;
	clear(  ):void;
	contains( arg0:any /*java.lang.Object*/ ):boolean;
	containsAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	forEach<T>( arg0:Consumer<T> ):void;
	isEmpty(  ):boolean;
	iterator(  ):Iterator<E>;
	parallelStream(  ):java.util.stream.Stream<E>;
	remove( arg0:any /*java.lang.Object*/ ):boolean;
	removeAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	removeIf( arg0:Predicate<E> ):boolean;
	retainAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	size(  ):int;
	spliterator(  ):any /*java.util.Spliterator*/;
	stream(  ):java.util.stream.Stream<E>;
	toArray(  ):[any /*java.lang.Object*/];
	toArray<T>( arg0:[T] ):[T];

} // end Collection

} // end namespace java.util
declare namespace org.jboss.forge.addon.ui.input {

interface UIInputMany<VALUETYPE>/* extends InputComponent<any, VALUETYPE>, ManyValued<any, VALUETYPE>, HasCompleter<any, VALUETYPE>*/ {

	addValidator<IMPLTYPE>( arg0:any /*org.jboss.forge.addon.ui.validate.UIValidator*/ ):IMPLTYPE;
	addValueChangeListener( arg0:any /*org.jboss.forge.addon.ui.input.ValueChangeListener*/ ):any /*org.jboss.forge.furnace.spi.ListenerRegistration*/;
	getCompleter(  ):any /*org.jboss.forge.addon.ui.input.UICompleter*/;
	getDeprecatedMessage(  ):string;
	getDescription(  ):string;
	getFacet<F>( arg0:java.lang.Class<F> ):F;
	getFacetAsOptional<F>( arg0:java.lang.Class<F> ):java.util.Optional<F>;
	getFacets<F>( arg0:java.lang.Class<F> ):java.lang.Iterable<F>;
	getFacets<FACETTYPE>(  ):java.lang.Iterable<FACETTYPE>;
	getLabel(  ):string;
	getName(  ):string;
	getNote(  ):string;
	getRequiredMessage(  ):string;
	getShortName(  ):any /*char*/;
	getValidators(  ):java.util.Set<any /*org.jboss.forge.addon.ui.validate.UIValidator*/>;
	getValue(  ):any /*java.lang.Object*/;
	getValue(  ):java.lang.Iterable<VALUETYPE>;
	getValueConverter(  ):any /*org.jboss.forge.addon.convert.Converter*/;
	getValueType(  ):java.lang.Class<VALUETYPE>;
	hasAllFacets<FACETTYPE>( ...arg0:java.lang.Class<FACETTYPE>[] ):boolean;
	hasAllFacets<FACETTYPE>( arg0:java.lang.Iterable<java.lang.Class<FACETTYPE>> ):boolean;
	hasDefaultValue(  ):boolean;
	hasFacet<FACETTYPE>( arg0:java.lang.Class<FACETTYPE> ):boolean;
	hasValue(  ):boolean;
	install<FACETTYPE>( arg0:FACETTYPE ):boolean;
	isDeprecated(  ):boolean;
	isEnabled(  ):boolean;
	isRequired(  ):boolean;
	register<FACETTYPE>( arg0:FACETTYPE ):boolean;
	setCompleter<IMPL>( arg0:any /*org.jboss.forge.addon.ui.input.UICompleter*/ ):IMPL;
	setDefaultValue<IMPL>( arg0:any /*java.util.concurrent.Callable*/ ):IMPL;
	setDefaultValue<IMPL>( arg0:java.lang.Iterable<VALUETYPE> ):IMPL;
	setDeprecated<IMPLTYPE>( arg0:boolean ):IMPLTYPE;
	setDeprecatedMessage<IMPLTYPE>( arg0:string ):IMPLTYPE;
	setDescription<IMPLTYPE>( arg0:any /*java.util.concurrent.Callable*/ ):IMPLTYPE;
	setDescription<IMPLTYPE>( arg0:string ):IMPLTYPE;
	setEnabled<IMPLTYPE>( arg0:any /*java.util.concurrent.Callable*/ ):IMPLTYPE;
	setEnabled<IMPLTYPE>( arg0:boolean ):IMPLTYPE;
	setLabel<IMPLTYPE>( arg0:string ):IMPLTYPE;
	setNote<IMPLTYPE>( arg0:any /*java.util.concurrent.Callable*/ ):IMPLTYPE;
	setNote<IMPLTYPE>( arg0:string ):IMPLTYPE;
	setRequired<IMPLTYPE>( arg0:any /*java.util.concurrent.Callable*/ ):IMPLTYPE;
	setRequired<IMPLTYPE>( arg0:boolean ):IMPLTYPE;
	setRequiredMessage<IMPLTYPE>( arg0:any /*java.util.concurrent.Callable*/ ):IMPLTYPE;
	setRequiredMessage<IMPLTYPE>( arg0:string ):IMPLTYPE;
	setValue<IMPL>( arg0:java.lang.Iterable<VALUETYPE> ):IMPL;
	setValueConverter<IMPLTYPE>( arg0:any /*org.jboss.forge.addon.convert.Converter*/ ):IMPLTYPE;
	supports<F>( arg0:F ):boolean;
	uninstall<FACETTYPE>( arg0:FACETTYPE ):boolean;
	unregister<FACETTYPE>( arg0:FACETTYPE ):boolean;
	validate( arg0:org.jboss.forge.addon.ui.context.UIValidationContext ):void;

} // end UIInputMany

} // end namespace org.jboss.forge.addon.ui.input
interface BiFunction<T, U, R>/*java.util.function.BiFunction*/ {

	( arg0:T, arg1:U ):R;
	andThen?<V>( arg0:Func<R, V> ):BiFunction<T, U, V>;

} // end BiFunction
declare namespace java.util {

interface Set<E>/* extends Collection<E>*/ {

	add( arg0:E ):boolean;
	addAll( arg0:Collection<E> ):boolean;
	clear(  ):void;
	contains( arg0:any /*java.lang.Object*/ ):boolean;
	containsAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	forEach<T>( arg0:Consumer<T> ):void;
	isEmpty(  ):boolean;
	iterator(  ):Iterator<E>;
	parallelStream(  ):java.util.stream.Stream<E>;
	remove( arg0:any /*java.lang.Object*/ ):boolean;
	removeAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	removeIf( arg0:Predicate<E> ):boolean;
	retainAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	size(  ):int;
	spliterator(  ):any /*java.util.Spliterator*/;
	stream(  ):java.util.stream.Stream<E>;
	toArray(  ):[any /*java.lang.Object*/];
	toArray<T>( arg0:[T] ):[T];

} // end Set

} // end namespace java.util
declare namespace java.util.stream {

class Collectors/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	toString(  ):string;

} // end Collectors

} // end namespace java.util.stream
declare namespace org.jboss.forge.addon.dependencies.builder {

class DependencyQueryBuilder/* extends java.lang.Object implements org.jboss.forge.addon.dependencies.DependencyQuery*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getCoordinate(  ):org.jboss.forge.addon.dependencies.Coordinate;
	getDependencyFilter(  ):any /*org.jboss.forge.furnace.util.Predicate*/;
	getDependencyRepositories(  ):List<org.jboss.forge.addon.dependencies.DependencyRepository>;
	getScopeType(  ):string;
	setFilter( arg0:any /*org.jboss.forge.furnace.util.Predicate*/ ):DependencyQueryBuilder;
	setRepositories( ...arg0:org.jboss.forge.addon.dependencies.DependencyRepository[] ):DependencyQueryBuilder;
	setRepositories( arg0:java.lang.Iterable<org.jboss.forge.addon.dependencies.DependencyRepository> ):DependencyQueryBuilder;
	setScopeType( arg0:string ):DependencyQueryBuilder;
	toString(  ):string;

} // end DependencyQueryBuilder

} // end namespace org.jboss.forge.addon.dependencies.builder
declare namespace org.jboss.forge.addon.parser.java.facets {

interface JavaSourceFacet/* extends org.jboss.forge.addon.projects.ProjectFacet*/ {

	calculateName( arg0:any /*org.jboss.forge.addon.parser.java.resources.JavaResource*/ ):string;
	calculatePackage( arg0:any /*org.jboss.forge.addon.parser.java.resources.JavaResource*/ ):string;
	getBasePackage(  ):string;
	getBasePackageDirectory(  ):any /*org.jboss.forge.addon.resource.DirectoryResource*/;
	getFaceted<FACETEDTYPE>(  ):FACETEDTYPE;
	getJavaResource( arg0:org.jboss.forge.roaster.model.source.JavaSource<any /*java.lang.Object*/> ):any /*org.jboss.forge.addon.parser.java.resources.JavaResource*/;
	getJavaResource( arg0:string ):any /*org.jboss.forge.addon.parser.java.resources.JavaResource*/;
	getPackage( arg0:string ):any /*org.jboss.forge.addon.resource.DirectoryResource*/;
	getSourceDirectories(  ):List<any /*org.jboss.forge.addon.resource.DirectoryResource*/>;
	getSourceDirectory(  ):any /*org.jboss.forge.addon.resource.DirectoryResource*/;
	getTestJavaResource( arg0:org.jboss.forge.roaster.model.source.JavaSource<any /*java.lang.Object*/> ):any /*org.jboss.forge.addon.parser.java.resources.JavaResource*/;
	getTestJavaResource( arg0:string ):any /*org.jboss.forge.addon.parser.java.resources.JavaResource*/;
	getTestPackage( arg0:string ):any /*org.jboss.forge.addon.resource.DirectoryResource*/;
	getTestSourceDirectory(  ):any /*org.jboss.forge.addon.resource.DirectoryResource*/;
	install(  ):boolean;
	isInstalled(  ):boolean;
	saveJavaSource( arg0:org.jboss.forge.roaster.model.source.JavaSource<any /*java.lang.Object*/> ):any /*org.jboss.forge.addon.parser.java.resources.JavaResource*/;
	saveJavaSourceUnformatted( arg0:org.jboss.forge.roaster.model.source.JavaSource<any /*java.lang.Object*/> ):any /*org.jboss.forge.addon.parser.java.resources.JavaResource*/;
	savePackage( arg0:string, arg1:boolean ):any /*org.jboss.forge.addon.resource.DirectoryResource*/;
	saveTestJavaSource( arg0:org.jboss.forge.roaster.model.source.JavaSource<any /*java.lang.Object*/> ):any /*org.jboss.forge.addon.parser.java.resources.JavaResource*/;
	saveTestJavaSourceUnformatted( arg0:org.jboss.forge.roaster.model.source.JavaSource<any /*java.lang.Object*/> ):any /*org.jboss.forge.addon.parser.java.resources.JavaResource*/;
	saveTestPackage( arg0:string, arg1:boolean ):any /*org.jboss.forge.addon.resource.DirectoryResource*/;
	uninstall(  ):boolean;
	visitJavaSources( arg0:any /*org.jboss.forge.addon.parser.java.resources.JavaResourceVisitor*/ ):void;
	visitJavaTestSources( arg0:any /*org.jboss.forge.addon.parser.java.resources.JavaResourceVisitor*/ ):void;

} // end JavaSourceFacet

} // end namespace org.jboss.forge.addon.parser.java.facets
declare namespace java.util {

class Arrays/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	toString(  ):string;

} // end Arrays

} // end namespace java.util
declare namespace org.apache.maven.model {

class Dependency/* extends java.lang.Object implements java.io.Serializable, java.lang.Cloneable, InputLocationTracker*/ {

	addExclusion( arg0:Exclusion ):void;
	clone(  ):Dependency;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getArtifactId(  ):string;
	getClassifier(  ):string;
	getExclusions(  ):List<Exclusion>;
	getGroupId(  ):string;
	getLocation( arg0:any /*java.lang.Object*/ ):any /*org.apache.maven.model.InputLocation*/;
	getManagementKey(  ):string;
	getOptional(  ):string;
	getScope(  ):string;
	getSystemPath(  ):string;
	getType(  ):string;
	getVersion(  ):string;
	isOptional(  ):boolean;
	removeExclusion( arg0:Exclusion ):void;
	setArtifactId( arg0:string ):void;
	setClassifier( arg0:string ):void;
	setExclusions( arg0:List<Exclusion> ):void;
	setGroupId( arg0:string ):void;
	setLocation( arg0:any /*java.lang.Object*/, arg1:any /*org.apache.maven.model.InputLocation*/ ):void;
	setOptional( arg0:boolean ):void;
	setOptional( arg0:string ):void;
	setScope( arg0:string ):void;
	setSystemPath( arg0:string ):void;
	setType( arg0:string ):void;
	setVersion( arg0:string ):void;
	toString(  ):string;

} // end Dependency

} // end namespace org.apache.maven.model
declare namespace org.jboss.forge.addon.dependencies {

class DependencyRepository/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getId(  ):string;
	getUrl(  ):string;
	toString(  ):string;

} // end DependencyRepository

} // end namespace org.jboss.forge.addon.dependencies
declare namespace org.jboss.forge.addon.ui.input {

interface InputComponentFactory {

	createInput<T>( arg0:string, arg1:any /*char*/, arg2:java.lang.Class<T> ):UIInput<T>;
	createInput<T>( arg0:string, arg1:java.lang.Class<T> ):UIInput<T>;
	createInputMany<T>( arg0:string, arg1:any /*char*/, arg2:java.lang.Class<T> ):UIInputMany<T>;
	createInputMany<T>( arg0:string, arg1:java.lang.Class<T> ):UIInputMany<T>;
	createSelectMany<T>( arg0:string, arg1:any /*char*/, arg2:java.lang.Class<T> ):UISelectMany<T>;
	createSelectMany<T>( arg0:string, arg1:java.lang.Class<T> ):UISelectMany<T>;
	createSelectOne<T>( arg0:string, arg1:any /*char*/, arg2:java.lang.Class<T> ):UISelectOne<T>;
	createSelectOne<T>( arg0:string, arg1:java.lang.Class<T> ):UISelectOne<T>;

} // end InputComponentFactory

} // end namespace org.jboss.forge.addon.ui.input
declare namespace org.jboss.forge.roaster.model.source {

interface JavaClassSource/* extends org.jboss.forge.roaster.model.JavaClass<any>, JavaSource<any>, InterfaceCapableSource<any>, FieldHolderSource<any>, MethodHolderSource<any>, GenericCapableSource<any, any>, ExtendableSource<any>, AbstractableSource<any>, PropertyHolderSource<any>, TypeHolderSource<any>, FinalCapableSource<any>, StaticCapableSource<any>*/ {

	addAnnotation(  ):any /*org.jboss.forge.roaster.model.source.AnnotationSource*/;
	addAnnotation( arg0:java.lang.Class<any /*java.lang.annotation.Annotation*/> ):any /*org.jboss.forge.roaster.model.source.AnnotationSource*/;
	addAnnotation( arg0:string ):any /*org.jboss.forge.roaster.model.source.AnnotationSource*/;
	addField(  ):any /*org.jboss.forge.roaster.model.source.FieldSource*/;
	addField( arg0:string ):any /*org.jboss.forge.roaster.model.source.FieldSource*/;
	addImport( arg0:any /*org.jboss.forge.roaster.model.Type*/ ):any /*org.jboss.forge.roaster.model.source.Import*/;
	addImport( arg0:any /*org.jboss.forge.roaster.model.source.Import*/ ):any /*org.jboss.forge.roaster.model.source.Import*/;
	addImport( arg0:java.lang.Class<any /*java.lang.Object*/> ):any /*org.jboss.forge.roaster.model.source.Import*/;
	addImport( arg0:string ):any /*org.jboss.forge.roaster.model.source.Import*/;
	addImport<T>( arg0:T ):any /*org.jboss.forge.roaster.model.source.Import*/;
	addInterface<T>( arg0:any /*org.jboss.forge.roaster.model.JavaInterface*/ ):T;
	addInterface<T>( arg0:java.lang.Class<any /*java.lang.Object*/> ):T;
	addInterface<T>( arg0:string ):T;
	addMethod(  ):any /*org.jboss.forge.roaster.model.source.MethodSource*/;
	addMethod( arg0:any /*java.lang.reflect.Method*/ ):any /*org.jboss.forge.roaster.model.source.MethodSource*/;
	addMethod( arg0:any /*org.jboss.forge.roaster.model.Method*/ ):any /*org.jboss.forge.roaster.model.source.MethodSource*/;
	addMethod( arg0:string ):any /*org.jboss.forge.roaster.model.source.MethodSource*/;
	addNestedType<NESTED_TYPE>( arg0:NESTED_TYPE ):NESTED_TYPE;
	addNestedType<NESTED_TYPE>( arg0:java.lang.Class<NESTED_TYPE> ):NESTED_TYPE;
	addNestedType<NESTED_TYPE>( arg0:string ):NESTED_TYPE;
	addProperty( arg0:any /*org.jboss.forge.roaster.model.JavaType*/, arg1:string ):any /*org.jboss.forge.roaster.model.source.PropertySource*/;
	addProperty( arg0:java.lang.Class<any /*java.lang.Object*/>, arg1:string ):any /*org.jboss.forge.roaster.model.source.PropertySource*/;
	addProperty( arg0:string, arg1:string ):any /*org.jboss.forge.roaster.model.source.PropertySource*/;
	addTypeVariable(  ):any /*org.jboss.forge.roaster.model.source.TypeVariableSource*/;
	addTypeVariable( arg0:string ):any /*org.jboss.forge.roaster.model.source.TypeVariableSource*/;
	extendSuperType<O>( arg0:any /*org.jboss.forge.roaster.model.JavaClass*/ ):O;
	extendSuperType<O>( arg0:java.lang.Class<any /*java.lang.Object*/> ):O;
	getAnnotation( arg0:java.lang.Class<any /*java.lang.annotation.Annotation*/> ):any /*org.jboss.forge.roaster.model.Annotation*/;
	getAnnotation( arg0:java.lang.Class<any /*java.lang.annotation.Annotation*/> ):any /*org.jboss.forge.roaster.model.source.AnnotationSource*/;
	getAnnotation( arg0:string ):any /*org.jboss.forge.roaster.model.Annotation*/;
	getAnnotation( arg0:string ):any /*org.jboss.forge.roaster.model.source.AnnotationSource*/;
	getAnnotations(  ):List<any /*org.jboss.forge.roaster.model.Annotation*/>;
	getAnnotations(  ):List<any /*org.jboss.forge.roaster.model.source.AnnotationSource*/>;
	getCanonicalName(  ):string;
	getEnclosingType(  ):JavaSource<any /*java.lang.Object*/>;
	getEnclosingType(  ):any /*org.jboss.forge.roaster.model.JavaType*/;
	getField( arg0:string ):any /*org.jboss.forge.roaster.model.Field*/;
	getField( arg0:string ):any /*org.jboss.forge.roaster.model.source.FieldSource*/;
	getFields(  ):List<any /*org.jboss.forge.roaster.model.Field*/>;
	getFields(  ):List<any /*org.jboss.forge.roaster.model.source.FieldSource*/>;
	getImport( arg0:any /*org.jboss.forge.roaster.model.source.Import*/ ):any /*org.jboss.forge.roaster.model.source.Import*/;
	getImport( arg0:java.lang.Class<any /*java.lang.Object*/> ):any /*org.jboss.forge.roaster.model.source.Import*/;
	getImport( arg0:string ):any /*org.jboss.forge.roaster.model.source.Import*/;
	getImport<T>( arg0:T ):any /*org.jboss.forge.roaster.model.source.Import*/;
	getImports(  ):List<any /*org.jboss.forge.roaster.model.source.Import*/>;
	getInterfaces(  ):List<string>;
	getInternal(  ):any /*java.lang.Object*/;
	getJavaDoc(  ):any /*org.jboss.forge.roaster.model.JavaDoc*/;
	getJavaDoc(  ):any /*org.jboss.forge.roaster.model.source.JavaDocSource*/;
	getMembers(  ):List<any /*org.jboss.forge.roaster.model.Member*/>;
	getMembers(  ):List<any /*org.jboss.forge.roaster.model.source.MemberSource*/>;
	getMethod( arg0:string ):any /*org.jboss.forge.roaster.model.Method*/;
	getMethod( arg0:string ):any /*org.jboss.forge.roaster.model.source.MethodSource*/;
	getMethod( arg0:string, ...arg1:java.lang.Class<any /*java.lang.Object*/>[] ):any /*org.jboss.forge.roaster.model.Method*/;
	getMethod( arg0:string, ...arg1:java.lang.Class<any /*java.lang.Object*/>[] ):any /*org.jboss.forge.roaster.model.source.MethodSource*/;
	getMethod( arg0:string, ...arg1:string[] ):any /*org.jboss.forge.roaster.model.Method*/;
	getMethod( arg0:string, ...arg1:string[] ):any /*org.jboss.forge.roaster.model.source.MethodSource*/;
	getMethods(  ):List<any /*org.jboss.forge.roaster.model.Method*/>;
	getMethods(  ):List<any /*org.jboss.forge.roaster.model.source.MethodSource*/>;
	getName(  ):string;
	getNestedType( arg0:string ):JavaSource<any /*java.lang.Object*/>;
	getNestedType( arg0:string ):any /*org.jboss.forge.roaster.model.JavaType*/;
	getNestedTypes(  ):List<JavaSource<any /*java.lang.Object*/>>;
	getNestedTypes(  ):List<any /*org.jboss.forge.roaster.model.JavaType*/>;
	getOrigin<T>(  ):T;
	getPackage(  ):string;
	getProperties(  ):List<any /*org.jboss.forge.roaster.model.Property*/>;
	getProperties(  ):List<any /*org.jboss.forge.roaster.model.source.PropertySource*/>;
	getProperties( arg0:java.lang.Class<any /*java.lang.Object*/> ):List<any /*org.jboss.forge.roaster.model.Property*/>;
	getProperties( arg0:java.lang.Class<any /*java.lang.Object*/> ):List<any /*org.jboss.forge.roaster.model.source.PropertySource*/>;
	getProperty( arg0:string ):any /*org.jboss.forge.roaster.model.Property*/;
	getProperty( arg0:string ):any /*org.jboss.forge.roaster.model.source.PropertySource*/;
	getQualifiedName(  ):string;
	getSuperType(  ):string;
	getSyntaxErrors(  ):List<any /*org.jboss.forge.roaster.model.SyntaxError*/>;
	getTypeVariable( arg0:string ):any /*org.jboss.forge.roaster.model.TypeVariable*/;
	getTypeVariable( arg0:string ):any /*org.jboss.forge.roaster.model.source.TypeVariableSource*/;
	getTypeVariables(  ):List<any /*org.jboss.forge.roaster.model.TypeVariable*/>;
	getTypeVariables(  ):List<any /*org.jboss.forge.roaster.model.source.TypeVariableSource*/>;
	getVisibility(  ):any /*org.jboss.forge.roaster.model.Visibility*/;
	hasAnnotation( arg0:java.lang.Class<any /*java.lang.annotation.Annotation*/> ):boolean;
	hasAnnotation( arg0:string ):boolean;
	hasField( arg0:any /*org.jboss.forge.roaster.model.Field*/ ):boolean;
	hasField( arg0:string ):boolean;
	hasImport( arg0:any /*org.jboss.forge.roaster.model.source.Import*/ ):boolean;
	hasImport( arg0:java.lang.Class<any /*java.lang.Object*/> ):boolean;
	hasImport( arg0:string ):boolean;
	hasImport<T>( arg0:T ):boolean;
	hasInterface( arg0:any /*org.jboss.forge.roaster.model.JavaInterface*/ ):boolean;
	hasInterface( arg0:java.lang.Class<any /*java.lang.Object*/> ):boolean;
	hasInterface( arg0:string ):boolean;
	hasJavaDoc(  ):boolean;
	hasMethod( arg0:any /*org.jboss.forge.roaster.model.Method*/ ):boolean;
	hasMethodSignature( arg0:any /*org.jboss.forge.roaster.model.Method*/ ):boolean;
	hasMethodSignature( arg0:string ):boolean;
	hasMethodSignature( arg0:string, ...arg1:java.lang.Class<any /*java.lang.Object*/>[] ):boolean;
	hasMethodSignature( arg0:string, ...arg1:string[] ):boolean;
	hasNestedType( arg0:any /*org.jboss.forge.roaster.model.JavaType*/ ):boolean;
	hasNestedType( arg0:java.lang.Class<any /*java.lang.Object*/> ):boolean;
	hasNestedType( arg0:string ):boolean;
	hasProperty( arg0:any /*org.jboss.forge.roaster.model.Property*/ ):boolean;
	hasProperty( arg0:string ):boolean;
	hasSyntaxErrors(  ):boolean;
	hasTypeVariable( arg0:string ):boolean;
	implementInterface<T>( arg0:any /*org.jboss.forge.roaster.model.JavaInterface*/ ):T;
	implementInterface<T>( arg0:java.lang.Class<any /*java.lang.Object*/> ):T;
	isAbstract(  ):boolean;
	isAnnotation(  ):boolean;
	isClass(  ):boolean;
	isDefaultPackage(  ):boolean;
	isEnum(  ):boolean;
	isFinal(  ):boolean;
	isInterface(  ):boolean;
	isLocalClass(  ):boolean;
	isPackagePrivate(  ):boolean;
	isPrivate(  ):boolean;
	isProtected(  ):boolean;
	isPublic(  ):boolean;
	isStatic(  ):boolean;
	removeAllAnnotations(  ):void;
	removeAnnotation<T>( arg0:any /*org.jboss.forge.roaster.model.Annotation*/ ):T;
	removeField<O>( arg0:any /*org.jboss.forge.roaster.model.Field*/ ):O;
	removeImport<O>( arg0:any /*org.jboss.forge.roaster.model.source.Import*/ ):O;
	removeImport<O>( arg0:java.lang.Class<any /*java.lang.Object*/> ):O;
	removeImport<O>( arg0:string ):O;
	removeImport<T,O>( arg0:T ):O;
	removeInterface<T>( arg0:any /*org.jboss.forge.roaster.model.JavaInterface*/ ):T;
	removeInterface<T>( arg0:java.lang.Class<any /*java.lang.Object*/> ):T;
	removeInterface<T>( arg0:string ):T;
	removeJavaDoc<O>(  ):O;
	removeMethod<O>( arg0:any /*org.jboss.forge.roaster.model.Method*/ ):O;
	removeNestedType<T>( arg0:JavaSource<any /*java.lang.Object*/> ):T;
	removeProperty( arg0:any /*org.jboss.forge.roaster.model.Property*/ ):any /*org.jboss.forge.roaster.model.source.PropertyHolderSource*/;
	removeTypeVariable<T>( arg0:any /*org.jboss.forge.roaster.model.TypeVariable*/ ):T;
	removeTypeVariable<T>( arg0:string ):T;
	requiresImport( arg0:java.lang.Class<any /*java.lang.Object*/> ):boolean;
	requiresImport( arg0:string ):boolean;
	resolveType( arg0:string ):string;
	setAbstract<T>( arg0:boolean ):T;
	setDefaultPackage<T>(  ):T;
	setFinal<T>( arg0:boolean ):T;
	setName<T>( arg0:string ):T;
	setPackage<T>( arg0:string ):T;
	setPackagePrivate<T>(  ):T;
	setPrivate<T>(  ):T;
	setProtected<T>(  ):T;
	setPublic<T>(  ):T;
	setStatic<T>( arg0:boolean ):T;
	setSuperType<O>( arg0:any /*org.jboss.forge.roaster.model.JavaType*/ ):O;
	setSuperType<O>( arg0:java.lang.Class<any /*java.lang.Object*/> ):O;
	setSuperType<O>( arg0:string ):O;
	setVisibility<T>( arg0:any /*org.jboss.forge.roaster.model.Visibility*/ ):T;
	toUnformattedString(  ):string;

} // end JavaClassSource

} // end namespace org.jboss.forge.roaster.model.source
interface UnaryOperator<T>/*java.util.function.UnaryOperator extends Function<T, any>*/ {

	<R>( arg0:T ):R;
	// static identity<T>(  ):UnaryOperator<T>;
	andThen?<R,V>( arg0:Func<R, V> ):Func<T, V>;
	compose?<R,V>( arg0:Func<V, T> ):Func<V, R>;

} // end UnaryOperator
declare namespace org.jboss.forge.addon.maven.projects {

interface MavenPluginFacet/* extends org.jboss.forge.addon.projects.ProvidedProjectFacet*/ {

	addManagedPlugin( arg0:org.jboss.forge.addon.maven.plugins.MavenPlugin ):void;
	addManagedPlugin( arg0:org.jboss.forge.addon.maven.plugins.MavenPlugin, arg1:any /*org.jboss.forge.addon.maven.profiles.Profile*/ ):void;
	addPlugin( arg0:org.jboss.forge.addon.maven.plugins.MavenPlugin ):void;
	addPlugin( arg0:org.jboss.forge.addon.maven.plugins.MavenPlugin, arg1:any /*org.jboss.forge.addon.maven.profiles.Profile*/ ):void;
	addPluginRepository( arg0:string, arg1:string ):void;
	addPluginRepository( arg0:string, arg1:string, arg2:any /*org.jboss.forge.addon.maven.profiles.Profile*/ ):void;
	getEffectiveManagedPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate ):org.jboss.forge.addon.maven.plugins.MavenPlugin;
	getEffectiveManagedPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate, arg1:any /*org.jboss.forge.addon.maven.profiles.Profile*/ ):org.jboss.forge.addon.maven.plugins.MavenPlugin;
	getEffectivePlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate ):org.jboss.forge.addon.maven.plugins.MavenPlugin;
	getEffectivePlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate, arg1:any /*org.jboss.forge.addon.maven.profiles.Profile*/ ):org.jboss.forge.addon.maven.plugins.MavenPlugin;
	getFaceted<FACETEDTYPE>(  ):FACETEDTYPE;
	getManagedPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate ):org.jboss.forge.addon.maven.plugins.MavenPlugin;
	getManagedPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate, arg1:any /*org.jboss.forge.addon.maven.profiles.Profile*/ ):org.jboss.forge.addon.maven.plugins.MavenPlugin;
	getPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate ):org.jboss.forge.addon.maven.plugins.MavenPlugin;
	getPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate, arg1:any /*org.jboss.forge.addon.maven.profiles.Profile*/ ):org.jboss.forge.addon.maven.plugins.MavenPlugin;
	getPluginRepositories(  ):List<org.jboss.forge.addon.dependencies.DependencyRepository>;
	getPluginRepositories( arg0:any /*org.jboss.forge.addon.maven.profiles.Profile*/ ):List<org.jboss.forge.addon.dependencies.DependencyRepository>;
	hasEffectiveManagedPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate ):boolean;
	hasEffectiveManagedPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate, arg1:any /*org.jboss.forge.addon.maven.profiles.Profile*/ ):boolean;
	hasEffectivePlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate ):boolean;
	hasEffectivePlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate, arg1:any /*org.jboss.forge.addon.maven.profiles.Profile*/ ):boolean;
	hasManagedPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate ):boolean;
	hasManagedPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate, arg1:any /*org.jboss.forge.addon.maven.profiles.Profile*/ ):boolean;
	hasPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate ):boolean;
	hasPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate, arg1:any /*org.jboss.forge.addon.maven.profiles.Profile*/ ):boolean;
	hasPluginRepository( arg0:string ):boolean;
	hasPluginRepository( arg0:string, arg1:any /*org.jboss.forge.addon.maven.profiles.Profile*/ ):boolean;
	install(  ):boolean;
	isInstalled(  ):boolean;
	listConfiguredEffectiveManagedPlugins(  ):List<org.jboss.forge.addon.maven.plugins.MavenPlugin>;
	listConfiguredEffectiveManagedPlugins( arg0:any /*org.jboss.forge.addon.maven.profiles.Profile*/ ):List<org.jboss.forge.addon.maven.plugins.MavenPlugin>;
	listConfiguredEffectivePlugins(  ):List<org.jboss.forge.addon.maven.plugins.MavenPlugin>;
	listConfiguredEffectivePlugins( arg0:any /*org.jboss.forge.addon.maven.profiles.Profile*/ ):List<org.jboss.forge.addon.maven.plugins.MavenPlugin>;
	listConfiguredManagedPlugins(  ):List<org.jboss.forge.addon.maven.plugins.MavenPlugin>;
	listConfiguredManagedPlugins( arg0:any /*org.jboss.forge.addon.maven.profiles.Profile*/ ):List<org.jboss.forge.addon.maven.plugins.MavenPlugin>;
	listConfiguredPlugins(  ):List<org.jboss.forge.addon.maven.plugins.MavenPlugin>;
	listConfiguredPlugins( arg0:any /*org.jboss.forge.addon.maven.profiles.Profile*/ ):List<org.jboss.forge.addon.maven.plugins.MavenPlugin>;
	merge( arg0:org.jboss.forge.addon.maven.plugins.MavenPlugin, arg1:org.jboss.forge.addon.maven.plugins.MavenPlugin ):org.jboss.forge.addon.maven.plugins.MavenPlugin;
	removeManagedPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate ):void;
	removeManagedPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate, arg1:any /*org.jboss.forge.addon.maven.profiles.Profile*/ ):void;
	removePlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate ):void;
	removePlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate, arg1:any /*org.jboss.forge.addon.maven.profiles.Profile*/ ):void;
	removePluginRepository( arg0:string ):org.jboss.forge.addon.dependencies.DependencyRepository;
	removePluginRepository( arg0:string, arg1:any /*org.jboss.forge.addon.maven.profiles.Profile*/ ):org.jboss.forge.addon.dependencies.DependencyRepository;
	uninstall(  ):boolean;
	updateManagedPlugin( arg0:org.jboss.forge.addon.maven.plugins.MavenPlugin ):void;
	updateManagedPlugin( arg0:org.jboss.forge.addon.maven.plugins.MavenPlugin, arg1:any /*org.jboss.forge.addon.maven.profiles.Profile*/ ):void;
	updatePlugin( arg0:org.jboss.forge.addon.maven.plugins.MavenPlugin ):void;
	updatePlugin( arg0:org.jboss.forge.addon.maven.plugins.MavenPlugin, arg1:any /*org.jboss.forge.addon.maven.profiles.Profile*/ ):void;

} // end MavenPluginFacet

} // end namespace org.jboss.forge.addon.maven.projects
declare namespace org.jboss.forge.addon.ui.input {

interface UIInput<VALUETYPE>/* extends InputComponent<any, VALUETYPE>, SingleValued<any, VALUETYPE>, HasCompleter<any, VALUETYPE>*/ {

	addValidator<IMPLTYPE>( arg0:any /*org.jboss.forge.addon.ui.validate.UIValidator*/ ):IMPLTYPE;
	addValueChangeListener( arg0:any /*org.jboss.forge.addon.ui.input.ValueChangeListener*/ ):any /*org.jboss.forge.furnace.spi.ListenerRegistration*/;
	getCompleter(  ):any /*org.jboss.forge.addon.ui.input.UICompleter*/;
	getDeprecatedMessage(  ):string;
	getDescription(  ):string;
	getFacet<F>( arg0:java.lang.Class<F> ):F;
	getFacetAsOptional<F>( arg0:java.lang.Class<F> ):java.util.Optional<F>;
	getFacets<F>( arg0:java.lang.Class<F> ):java.lang.Iterable<F>;
	getFacets<FACETTYPE>(  ):java.lang.Iterable<FACETTYPE>;
	getLabel(  ):string;
	getName(  ):string;
	getNote(  ):string;
	getRequiredMessage(  ):string;
	getShortName(  ):any /*char*/;
	getValidators(  ):java.util.Set<any /*org.jboss.forge.addon.ui.validate.UIValidator*/>;
	getValue(  ):VALUETYPE;
	getValue(  ):any /*java.lang.Object*/;
	getValueConverter(  ):any /*org.jboss.forge.addon.convert.Converter*/;
	getValueType(  ):java.lang.Class<VALUETYPE>;
	hasAllFacets<FACETTYPE>( ...arg0:java.lang.Class<FACETTYPE>[] ):boolean;
	hasAllFacets<FACETTYPE>( arg0:java.lang.Iterable<java.lang.Class<FACETTYPE>> ):boolean;
	hasDefaultValue(  ):boolean;
	hasFacet<FACETTYPE>( arg0:java.lang.Class<FACETTYPE> ):boolean;
	hasValue(  ):boolean;
	install<FACETTYPE>( arg0:FACETTYPE ):boolean;
	isDeprecated(  ):boolean;
	isEnabled(  ):boolean;
	isRequired(  ):boolean;
	register<FACETTYPE>( arg0:FACETTYPE ):boolean;
	setCompleter<IMPL>( arg0:any /*org.jboss.forge.addon.ui.input.UICompleter*/ ):IMPL;
	setDefaultValue<IMPL>( arg0:VALUETYPE ):IMPL;
	setDefaultValue<IMPL>( arg0:any /*java.util.concurrent.Callable*/ ):IMPL;
	setDeprecated<IMPLTYPE>( arg0:boolean ):IMPLTYPE;
	setDeprecatedMessage<IMPLTYPE>( arg0:string ):IMPLTYPE;
	setDescription<IMPLTYPE>( arg0:any /*java.util.concurrent.Callable*/ ):IMPLTYPE;
	setDescription<IMPLTYPE>( arg0:string ):IMPLTYPE;
	setEnabled<IMPLTYPE>( arg0:any /*java.util.concurrent.Callable*/ ):IMPLTYPE;
	setEnabled<IMPLTYPE>( arg0:boolean ):IMPLTYPE;
	setLabel<IMPLTYPE>( arg0:string ):IMPLTYPE;
	setNote<IMPLTYPE>( arg0:any /*java.util.concurrent.Callable*/ ):IMPLTYPE;
	setNote<IMPLTYPE>( arg0:string ):IMPLTYPE;
	setRequired<IMPLTYPE>( arg0:any /*java.util.concurrent.Callable*/ ):IMPLTYPE;
	setRequired<IMPLTYPE>( arg0:boolean ):IMPLTYPE;
	setRequiredMessage<IMPLTYPE>( arg0:any /*java.util.concurrent.Callable*/ ):IMPLTYPE;
	setRequiredMessage<IMPLTYPE>( arg0:string ):IMPLTYPE;
	setValue<IMPL>( arg0:VALUETYPE ):IMPL;
	setValueConverter<IMPLTYPE>( arg0:any /*org.jboss.forge.addon.convert.Converter*/ ):IMPLTYPE;
	supports<F>( arg0:F ):boolean;
	uninstall<FACETTYPE>( arg0:FACETTYPE ):boolean;
	unregister<FACETTYPE>( arg0:FACETTYPE ):boolean;
	validate( arg0:org.jboss.forge.addon.ui.context.UIValidationContext ):void;

} // end UIInput

} // end namespace org.jboss.forge.addon.ui.input
declare namespace org.jboss.forge.addon.ui.context {

interface UIBuilder/* extends UIContextProvider*/ {

	add( arg0:any /*org.jboss.forge.addon.ui.input.InputComponent*/ ):UIBuilder;
	getInputComponentFactory(  ):org.jboss.forge.addon.ui.input.InputComponentFactory;
	getUIContext(  ):UIContext;

} // end UIBuilder

} // end namespace org.jboss.forge.addon.ui.context
declare namespace org.apache.maven.model {

class Model/* extends ModelBase implements java.io.Serializable, java.lang.Cloneable*/ {

	addContributor( arg0:any /*org.apache.maven.model.Contributor*/ ):void;
	addDependency( arg0:Dependency ):void;
	addDeveloper( arg0:any /*org.apache.maven.model.Developer*/ ):void;
	addLicense( arg0:any /*org.apache.maven.model.License*/ ):void;
	addMailingList( arg0:any /*org.apache.maven.model.MailingList*/ ):void;
	addModule( arg0:string ):void;
	addPluginRepository( arg0:any /*org.apache.maven.model.Repository*/ ):void;
	addProfile( arg0:any /*org.apache.maven.model.Profile*/ ):void;
	addProperty( arg0:string, arg1:string ):void;
	addRepository( arg0:any /*org.apache.maven.model.Repository*/ ):void;
	clone(  ):Model;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getArtifactId(  ):string;
	getBuild(  ):any /*org.apache.maven.model.Build*/;
	getCiManagement(  ):any /*org.apache.maven.model.CiManagement*/;
	getContributors(  ):List<any /*org.apache.maven.model.Contributor*/>;
	getDependencies(  ):List<Dependency>;
	getDependencyManagement(  ):any /*org.apache.maven.model.DependencyManagement*/;
	getDescription(  ):string;
	getDevelopers(  ):List<any /*org.apache.maven.model.Developer*/>;
	getDistributionManagement(  ):any /*org.apache.maven.model.DistributionManagement*/;
	getGroupId(  ):string;
	getId(  ):string;
	getInceptionYear(  ):string;
	getIssueManagement(  ):any /*org.apache.maven.model.IssueManagement*/;
	getLicenses(  ):List<any /*org.apache.maven.model.License*/>;
	getLocation( arg0:any /*java.lang.Object*/ ):any /*org.apache.maven.model.InputLocation*/;
	getMailingLists(  ):List<any /*org.apache.maven.model.MailingList*/>;
	getModelEncoding(  ):string;
	getModelVersion(  ):string;
	getModules(  ):List<string>;
	getName(  ):string;
	getOrganization(  ):any /*org.apache.maven.model.Organization*/;
	getPackaging(  ):string;
	getParent(  ):any /*org.apache.maven.model.Parent*/;
	getPluginRepositories(  ):List<any /*org.apache.maven.model.Repository*/>;
	getPomFile(  ):any /*java.io.File*/;
	getPrerequisites(  ):any /*org.apache.maven.model.Prerequisites*/;
	getProfiles(  ):List<any /*org.apache.maven.model.Profile*/>;
	getProjectDirectory(  ):any /*java.io.File*/;
	getProperties(  ):any /*java.util.Properties*/;
	getReporting(  ):any /*org.apache.maven.model.Reporting*/;
	getReports(  ):any /*java.lang.Object*/;
	getRepositories(  ):List<any /*org.apache.maven.model.Repository*/>;
	getScm(  ):any /*org.apache.maven.model.Scm*/;
	getUrl(  ):string;
	getVersion(  ):string;
	removeContributor( arg0:any /*org.apache.maven.model.Contributor*/ ):void;
	removeDependency( arg0:Dependency ):void;
	removeDeveloper( arg0:any /*org.apache.maven.model.Developer*/ ):void;
	removeLicense( arg0:any /*org.apache.maven.model.License*/ ):void;
	removeMailingList( arg0:any /*org.apache.maven.model.MailingList*/ ):void;
	removeModule( arg0:string ):void;
	removePluginRepository( arg0:any /*org.apache.maven.model.Repository*/ ):void;
	removeProfile( arg0:any /*org.apache.maven.model.Profile*/ ):void;
	removeRepository( arg0:any /*org.apache.maven.model.Repository*/ ):void;
	setArtifactId( arg0:string ):void;
	setBuild( arg0:any /*org.apache.maven.model.Build*/ ):void;
	setCiManagement( arg0:any /*org.apache.maven.model.CiManagement*/ ):void;
	setContributors( arg0:List<any /*org.apache.maven.model.Contributor*/> ):void;
	setDependencies( arg0:List<Dependency> ):void;
	setDependencyManagement( arg0:any /*org.apache.maven.model.DependencyManagement*/ ):void;
	setDescription( arg0:string ):void;
	setDevelopers( arg0:List<any /*org.apache.maven.model.Developer*/> ):void;
	setDistributionManagement( arg0:any /*org.apache.maven.model.DistributionManagement*/ ):void;
	setGroupId( arg0:string ):void;
	setInceptionYear( arg0:string ):void;
	setIssueManagement( arg0:any /*org.apache.maven.model.IssueManagement*/ ):void;
	setLicenses( arg0:List<any /*org.apache.maven.model.License*/> ):void;
	setLocation( arg0:any /*java.lang.Object*/, arg1:any /*org.apache.maven.model.InputLocation*/ ):void;
	setMailingLists( arg0:List<any /*org.apache.maven.model.MailingList*/> ):void;
	setModelEncoding( arg0:string ):void;
	setModelVersion( arg0:string ):void;
	setModules( arg0:List<string> ):void;
	setName( arg0:string ):void;
	setOrganization( arg0:any /*org.apache.maven.model.Organization*/ ):void;
	setPackaging( arg0:string ):void;
	setParent( arg0:any /*org.apache.maven.model.Parent*/ ):void;
	setPluginRepositories( arg0:List<any /*org.apache.maven.model.Repository*/> ):void;
	setPomFile( arg0:any /*java.io.File*/ ):void;
	setPrerequisites( arg0:any /*org.apache.maven.model.Prerequisites*/ ):void;
	setProfiles( arg0:List<any /*org.apache.maven.model.Profile*/> ):void;
	setProperties( arg0:any /*java.util.Properties*/ ):void;
	setReporting( arg0:any /*org.apache.maven.model.Reporting*/ ):void;
	setReports( arg0:any /*java.lang.Object*/ ):void;
	setRepositories( arg0:List<any /*org.apache.maven.model.Repository*/> ):void;
	setScm( arg0:any /*org.apache.maven.model.Scm*/ ):void;
	setUrl( arg0:string ):void;
	setVersion( arg0:string ):void;
	toString(  ):string;

} // end Model

} // end namespace org.apache.maven.model
interface BiPredicate<T, U>/*java.util.function.BiPredicate*/ {

	( arg0:T, arg1:U ):boolean;
	and?( arg0:BiPredicate<T, U> ):BiPredicate<T, U>;
	negate?(  ):BiPredicate<T, U>;
	or?( arg0:BiPredicate<T, U> ):BiPredicate<T, U>;

} // end BiPredicate
interface List<E>/*java.util.List extends Collection<E>*/ {

	add( arg0:E ):boolean;
	add( arg0:int, arg1:E ):void;
	addAll( arg0:int, arg1:java.util.Collection<E> ):boolean;
	addAll( arg0:java.util.Collection<E> ):boolean;
	clear(  ):void;
	contains( arg0:any /*java.lang.Object*/ ):boolean;
	containsAll( arg0:java.util.Collection<any /*java.lang.Object*/> ):boolean;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	forEach<T>( arg0:Consumer<T> ):void;
	get( arg0:int ):E;
	indexOf( arg0:any /*java.lang.Object*/ ):int;
	isEmpty(  ):boolean;
	iterator(  ):java.util.Iterator<E>;
	lastIndexOf( arg0:any /*java.lang.Object*/ ):int;
	listIterator(  ):any /*java.util.ListIterator*/;
	listIterator( arg0:int ):any /*java.util.ListIterator*/;
	parallelStream(  ):java.util.stream.Stream<E>;
	remove( arg0:any /*java.lang.Object*/ ):boolean;
	remove( arg0:int ):E;
	removeAll( arg0:java.util.Collection<any /*java.lang.Object*/> ):boolean;
	removeIf( arg0:Predicate<E> ):boolean;
	replaceAll( arg0:UnaryOperator<E> ):void;
	retainAll( arg0:java.util.Collection<any /*java.lang.Object*/> ):boolean;
	set( arg0:int, arg1:E ):E;
	size(  ):int;
	sort( arg0:any /*java.util.Comparator*/ ):void;
	spliterator(  ):any /*java.util.Spliterator*/;
	stream(  ):java.util.stream.Stream<E>;
	subList( arg0:int, arg1:int ):List<E>;
	toArray(  ):[any /*java.lang.Object*/];
	toArray<T>( arg0:[T] ):[T];

} // end List
declare namespace org.jboss.forge.addon.ui.input {

interface UIPrompt {

	prompt( arg0:string ):string;
	promptBoolean( arg0:string ):boolean;
	promptBoolean( arg0:string, arg1:boolean ):boolean;
	promptSecret( arg0:string ):string;

} // end UIPrompt

} // end namespace org.jboss.forge.addon.ui.input
declare namespace org.jboss.forge.addon.dependencies.builder {

class CoordinateBuilder/* extends java.lang.Object implements org.jboss.forge.addon.dependencies.Coordinate*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getArtifactId(  ):string;
	getClassifier(  ):string;
	getGroupId(  ):string;
	getPackaging(  ):string;
	getSystemPath(  ):string;
	getVersion(  ):string;
	isSnapshot(  ):boolean;
	setArtifactId( arg0:string ):CoordinateBuilder;
	setClassifier( arg0:string ):CoordinateBuilder;
	setGroupId( arg0:string ):CoordinateBuilder;
	setPackaging( arg0:string ):CoordinateBuilder;
	setSystemPath( arg0:string ):CoordinateBuilder;
	setVersion( arg0:string ):CoordinateBuilder;
	toString(  ):string;

} // end CoordinateBuilder

} // end namespace org.jboss.forge.addon.dependencies.builder
declare namespace org.jboss.forge.addon.ui.command {

interface UICommand {

	execute( arg0:org.jboss.forge.addon.ui.context.UIExecutionContext ):org.jboss.forge.addon.ui.result.Result;
	getMetadata( arg0:org.jboss.forge.addon.ui.context.UIContext ):org.jboss.forge.addon.ui.metadata.UICommandMetadata;
	initializeUI( arg0:org.jboss.forge.addon.ui.context.UIBuilder ):void;
	isEnabled( arg0:org.jboss.forge.addon.ui.context.UIContext ):boolean;
	validate( arg0:org.jboss.forge.addon.ui.context.UIValidationContext ):void;

} // end UICommand

} // end namespace org.jboss.forge.addon.ui.command
declare namespace org.jboss.forge.addon.ui.context {

interface UIContextProvider {

	getUIContext(  ):UIContext;

} // end UIContextProvider

} // end namespace org.jboss.forge.addon.ui.context
declare namespace org.jboss.forge.addon.maven.plugins {

interface PluginElement {


} // end PluginElement

} // end namespace org.jboss.forge.addon.maven.plugins
declare namespace org.jboss.forge.addon.ui.result {

class Results/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	static aggregate( arg0:java.lang.Iterable<Result> ):any /*org.jboss.forge.addon.ui.result.CompositeResult*/;
	static aggregate( arg0:java.lang.Iterable<Result>, arg1:any /*java.lang.Object*/ ):any /*org.jboss.forge.addon.ui.result.CompositeResult*/;
	static fail(  ):any /*org.jboss.forge.addon.ui.result.Failed*/;
	static fail( arg0:string ):any /*org.jboss.forge.addon.ui.result.Failed*/;
	static fail( arg0:string, arg1:any /*java.lang.Throwable*/ ):any /*org.jboss.forge.addon.ui.result.Failed*/;
	static fail( arg0:string, arg1:any /*java.lang.Throwable*/, arg2:any /*java.lang.Object*/ ):any /*org.jboss.forge.addon.ui.result.Failed*/;
	static navigateTo( arg0:[java.lang.Class<org.jboss.forge.addon.ui.command.UICommand>] ):NavigationResult;
	static navigateTo( arg0:java.lang.Class<org.jboss.forge.addon.ui.command.UICommand> ):NavigationResult;
	static navigateTo( arg0:java.lang.Class<org.jboss.forge.addon.ui.command.UICommand>, ...arg1:java.lang.Class<org.jboss.forge.addon.ui.command.UICommand>[] ):NavigationResult;
	static navigationBuilder(  ):any /*org.jboss.forge.addon.ui.result.navigation.NavigationResultBuilder*/;
	static success(  ):Result;
	static success( arg0:string ):Result;
	static success( arg0:string, arg1:any /*java.lang.Object*/ ):Result;
	toString(  ):string;

} // end Results

} // end namespace org.jboss.forge.addon.ui.result
interface BiConsumer<T, U>/*java.util.function.BiConsumer*/ {

	( arg0:T, arg1:U ):void;
	andThen?( arg0:BiConsumer<T, U> ):BiConsumer<T, U>;

} // end BiConsumer
declare namespace org.jboss.forge.addon.maven.plugins {

interface Execution {

	getConfig(  ):Configuration;
	getGoals(  ):List<string>;
	getId(  ):string;
	getPhase(  ):string;

} // end Execution

} // end namespace org.jboss.forge.addon.maven.plugins
declare namespace org.jboss.forge.addon.dependencies.builder {

class DependencyBuilder/* extends java.lang.Object implements org.jboss.forge.addon.dependencies.Dependency*/ {

	addExclusion( arg0:org.jboss.forge.addon.dependencies.Coordinate ):DependencyBuilder;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getArtifact(  ):any /*org.jboss.forge.addon.resource.FileResource*/;
	getCoordinate(  ):CoordinateBuilder;
	getExcludedCoordinates(  ):List<org.jboss.forge.addon.dependencies.Coordinate>;
	getGroupId(  ):string;
	getScopeType(  ):string;
	isOptional(  ):boolean;
	setArtifact( arg0:any /*org.jboss.forge.addon.resource.FileResource*/ ):DependencyBuilder;
	setArtifactId( arg0:string ):DependencyBuilder;
	setClassifier( arg0:string ):DependencyBuilder;
	setCoordinate( arg0:org.jboss.forge.addon.dependencies.Coordinate ):DependencyBuilder;
	setExcludedCoordinates( arg0:List<org.jboss.forge.addon.dependencies.Coordinate> ):DependencyBuilder;
	setGroupId( arg0:string ):DependencyBuilder;
	setOptional( arg0:boolean ):DependencyBuilder;
	setPackaging( arg0:string ):DependencyBuilder;
	setScopeType( arg0:string ):DependencyBuilder;
	setVersion( arg0:string ):DependencyBuilder;
	toString(  ):string;

} // end DependencyBuilder

} // end namespace org.jboss.forge.addon.dependencies.builder
declare namespace org.jboss.forge.addon.maven.plugins {

interface MavenPlugin/* extends PluginElement*/ {

	getConfig(  ):Configuration;
	getCoordinate(  ):org.jboss.forge.addon.dependencies.Coordinate;
	getDirectDependencies(  ):List<org.jboss.forge.addon.dependencies.Dependency>;
	isExtensionsEnabled(  ):boolean;
	listExecutions(  ):List<Execution>;

} // end MavenPlugin

} // end namespace org.jboss.forge.addon.maven.plugins
