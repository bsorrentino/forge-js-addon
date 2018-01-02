//
// JAVA TYPESCRIPT DEDINITION
//


type int    = number;
type long   = number;
type float	= number;
type double = number;
type byte   = number;
type char   = string;

type chararray = [byte];
type bytearray = [char];

type Runnable = () => void;

type Supplier<T> = () => T;

type Consumer<T> = ( v:T) => void;

type UnaryOperator<T> = ( v:T ) => T ;

type Predicate<T>  = ( v:T ) => boolean;

type Comparator<T> = ( o1:T, o2:T ) => int;

//
// NASHORN
//

declare function print( ...args: any[]):void

declare function load( module:string ):void

declare namespace Java {

  export function type<T>( t:string):T;

  export function from<T>( list:java.util.List<T>):Array<T> ;
}


declare namespace java.lang {

	interface Class<T> {}
	interface AutoCloseable {}
	interface Cloneable {}

	interface Comparable<T> {

		compareTo?( arg0:T ):number;

	}

	type Object = any;
}

declare namespace java.util {

	interface RandomAccess {}
}

declare namespace java.io {

	interface Closeable {}
	interface Serializable {}
}
declare namespace org.jboss.forge.addon.ui.context {

interface UIContext/*UIContext extends java.lang.AutoCloseable*/ {

	addCommandExecutionListener( arg0:org.jboss.forge.addon.ui.command.CommandExecutionListener ):any /* org.jboss.forge.furnace.spi.ListenerRegistration */;
	close(  ):void;
	getAttributeMap(  ):java.util.Map<any, any>;
	getInitialSelection(  ):any /* org.jboss.forge.addon.ui.context.UISelection */;
	getListeners(  ):java.util.Set<any>;
	getProvider(  ):any /* org.jboss.forge.addon.ui.UIProvider */;
	getSelection(  ):any /* org.jboss.forge.addon.ui.context.UISelection */;
	setSelection( arg0:any /* java.lang.Object */ ):void;
	setSelection( arg0:any /* org.jboss.forge.addon.ui.context.UISelection */ ):void;

} // end UIContext

} // end namespace org.jboss.forge.addon.ui.context
declare namespace org.jboss.forge.addon.ui.context {

interface UIBuilder/*UIBuilder extends UIContextProvider*/ {

	add( arg0:any /* org.jboss.forge.addon.ui.input.InputComponent */ ):UIBuilder;
	getInputComponentFactory(  ):org.jboss.forge.addon.ui.input.InputComponentFactory;
	getUIContext(  ):UIContext;

} // end UIBuilder

} // end namespace org.jboss.forge.addon.ui.context
declare namespace org.jboss.forge.addon.ui.input {

interface UIPrompt {

	prompt( arg0:string ):string;
	promptBoolean( arg0:string ):boolean;
	promptBoolean( arg0:string, arg1:boolean ):boolean;
	promptSecret( arg0:string ):string;

} // end UIPrompt

} // end namespace org.jboss.forge.addon.ui.input
declare namespace org.jboss.forge.addon.maven.plugins {

interface Configuration/*Configuration extends PluginElement*/ {

	addConfigurationElement( arg0:ConfigurationElement ):Configuration;
	getConfigurationElement( arg0:string ):ConfigurationElement;
	hasConfigurationElement( arg0:string ):boolean;
	hasConfigurationElements(  ):boolean;
	listConfigurationElements(  ):java.util.List<any>;
	removeConfigurationElement( arg0:string ):void;

} // end Configuration

} // end namespace org.jboss.forge.addon.maven.plugins
declare namespace java.util {

class Collections/* extends java.lang.Object*/ {

	equals( arg0:any /* java.lang.Object */ ):boolean;
	toString(  ):string;

} // end Collections

} // end namespace java.util
declare namespace org.jboss.forge.addon.maven.plugins {

class MavenPluginBuilder/* extends java.lang.ObjectMavenPluginBuilder implements MavenPlugin, PluginElement*/ {

	addExecution( arg0:Execution ):MavenPluginBuilder;
	addPluginDependency( arg0:org.jboss.forge.addon.dependencies.Dependency ):MavenPluginBuilder;
	createConfiguration(  ):ConfigurationBuilder;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	getConfig(  ):Configuration;
	getCoordinate(  ):org.jboss.forge.addon.dependencies.Coordinate;
	getDirectDependencies(  ):java.util.List<any>;
	isExtensionsEnabled(  ):boolean;
	listExecutions(  ):java.util.List<any>;
	setConfiguration( arg0:Configuration ):MavenPluginBuilder;
	setCoordinate( arg0:org.jboss.forge.addon.dependencies.Coordinate ):MavenPluginBuilder;
	setExtensions( arg0:boolean ):MavenPluginBuilder;
	toString(  ):string;

} // end MavenPluginBuilder

} // end namespace org.jboss.forge.addon.maven.plugins
declare namespace org.jboss.forge.addon.maven.dependencies {

class MavenDependencyAdapter/* extends org.apache.maven.model.DependencyMavenDependencyAdapter implements org.jboss.forge.addon.dependencies.Dependency*/ {

	addExclusion( arg0:org.apache.maven.model.Exclusion ):void;
	clone(  ):org.apache.maven.model.Dependency;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	getArtifact(  ):any /* org.jboss.forge.addon.resource.FileResource */;
	getArtifactId(  ):string;
	getClassifier(  ):string;
	getCoordinate(  ):org.jboss.forge.addon.dependencies.Coordinate;
	getExcludedCoordinates(  ):java.util.List<any>;
	getExclusions(  ):java.util.List<any>;
	getGroupId(  ):string;
	getLocation( arg0:any /* java.lang.Object */ ):any /* org.apache.maven.model.InputLocation */;
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
	setExclusions( arg0:java.util.List<any> ):void;
	setGroupId( arg0:string ):void;
	setLocation( arg0:any /* java.lang.Object */, arg1:any /* org.apache.maven.model.InputLocation */ ):void;
	setOptional( arg0:boolean ):void;
	setOptional( arg0:string ):void;
	setScope( arg0:string ):void;
	setSystemPath( arg0:string ):void;
	setType( arg0:string ):void;
	setVersion( arg0:string ):void;
	static fromAetherList<E>( arg0:java.util.List<any> ):java.util.List<any>;
	static fromMavenList<E>( arg0:java.util.List<any> ):java.util.List<any>;
	static toMavenList<E>( arg0:java.util.List<any> ):java.util.List<any>;
	toString(  ):string;

} // end MavenDependencyAdapter

} // end namespace org.jboss.forge.addon.maven.dependencies
declare namespace java.util {

interface Set<E>/*Set<E> extends Collection<E>*/ {

	add( arg0:any /* java.lang.Object */ ):boolean;
	addAll( arg0:Collection<E> ):boolean;
	clear(  ):void;
	contains( arg0:any /* java.lang.Object */ ):boolean;
	containsAll( arg0:Collection<E> ):boolean;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	forEach( arg0:Consumer<E> ):void;
	isEmpty(  ):boolean;
	iterator(  ):Iterator<E>;
	parallelStream(  ):java.util.stream.Stream<E>;
	remove( arg0:any /* java.lang.Object */ ):boolean;
	removeAll( arg0:Collection<E> ):boolean;
	removeIf( arg0:Predicate<E> ):boolean;
	retainAll( arg0:Collection<E> ):boolean;
	size(  ):int;
	spliterator(  ):any /* java.util.Spliterator */;
	stream(  ):java.util.stream.Stream<E>;
	toArray(  ):[any] /* [Ljava.lang.Object; */;
	toArray( arg0:[any] /* [Ljava.lang.Object; */ ):[any] /* [Ljava.lang.Object; */;

} // end Set<E>

} // end namespace java.util
declare namespace java.util {

interface Iterator<E> {

	forEachRemaining( arg0:Consumer<E> ):void;
	hasNext(  ):boolean;
	next(  ):any /* java.lang.Object */;
	remove(  ):void;

} // end Iterator<E>

} // end namespace java.util
declare namespace org.jboss.forge.addon.ui.context {

interface UINavigationContext/*UINavigationContext extends UIContextProvider*/ {

	getCurrentCommand(  ):org.jboss.forge.addon.ui.command.UICommand;
	getInitialCommand(  ):org.jboss.forge.addon.ui.command.UICommand;
	getUIContext(  ):UIContext;
	navigateTo( arg0:java.lang.Class<any>, arg1:[any] /* [Ljava.lang.Class; */ ):org.jboss.forge.addon.ui.result.NavigationResult;

} // end UINavigationContext

} // end namespace org.jboss.forge.addon.ui.context
declare namespace org.jboss.forge.addon.ui.command {

interface UICommand {

	execute( arg0:org.jboss.forge.addon.ui.context.UIExecutionContext ):org.jboss.forge.addon.ui.result.Result;
	getMetadata( arg0:org.jboss.forge.addon.ui.context.UIContext ):org.jboss.forge.addon.ui.metadata.UICommandMetadata;
	initializeUI( arg0:org.jboss.forge.addon.ui.context.UIBuilder ):void;
	isEnabled( arg0:org.jboss.forge.addon.ui.context.UIContext ):boolean;
	validate( arg0:org.jboss.forge.addon.ui.context.UIValidationContext ):void;

} // end UICommand

} // end namespace org.jboss.forge.addon.ui.command
declare namespace org.jboss.forge.addon.parser.java.facets {

interface JavaSourceFacet/*JavaSourceFacet extends org.jboss.forge.addon.projects.ProjectFacet*/ {

	calculateName( arg0:any /* org.jboss.forge.addon.parser.java.resources.JavaResource */ ):string;
	calculatePackage( arg0:any /* org.jboss.forge.addon.parser.java.resources.JavaResource */ ):string;
	getBasePackage(  ):string;
	getBasePackageDirectory(  ):any /* org.jboss.forge.addon.resource.DirectoryResource */;
	getFaceted(  ):any /* org.jboss.forge.addon.facets.Faceted */;
	getJavaResource( arg0:any /* org.jboss.forge.roaster.model.source.JavaSource */ ):any /* org.jboss.forge.addon.parser.java.resources.JavaResource */;
	getJavaResource( arg0:string ):any /* org.jboss.forge.addon.parser.java.resources.JavaResource */;
	getPackage( arg0:string ):any /* org.jboss.forge.addon.resource.DirectoryResource */;
	getSourceDirectories(  ):java.util.List<any>;
	getSourceDirectory(  ):any /* org.jboss.forge.addon.resource.DirectoryResource */;
	getTestJavaResource( arg0:any /* org.jboss.forge.roaster.model.source.JavaSource */ ):any /* org.jboss.forge.addon.parser.java.resources.JavaResource */;
	getTestJavaResource( arg0:string ):any /* org.jboss.forge.addon.parser.java.resources.JavaResource */;
	getTestPackage( arg0:string ):any /* org.jboss.forge.addon.resource.DirectoryResource */;
	getTestSourceDirectory(  ):any /* org.jboss.forge.addon.resource.DirectoryResource */;
	install(  ):boolean;
	isInstalled(  ):boolean;
	saveJavaSource( arg0:any /* org.jboss.forge.roaster.model.source.JavaSource */ ):any /* org.jboss.forge.addon.parser.java.resources.JavaResource */;
	saveJavaSourceUnformatted( arg0:any /* org.jboss.forge.roaster.model.source.JavaSource */ ):any /* org.jboss.forge.addon.parser.java.resources.JavaResource */;
	savePackage( arg0:string, arg1:boolean ):any /* org.jboss.forge.addon.resource.DirectoryResource */;
	saveTestJavaSource( arg0:any /* org.jboss.forge.roaster.model.source.JavaSource */ ):any /* org.jboss.forge.addon.parser.java.resources.JavaResource */;
	saveTestJavaSourceUnformatted( arg0:any /* org.jboss.forge.roaster.model.source.JavaSource */ ):any /* org.jboss.forge.addon.parser.java.resources.JavaResource */;
	saveTestPackage( arg0:string, arg1:boolean ):any /* org.jboss.forge.addon.resource.DirectoryResource */;
	uninstall(  ):boolean;
	visitJavaSources( arg0:any /* org.jboss.forge.addon.parser.java.resources.JavaResourceVisitor */ ):void;
	visitJavaTestSources( arg0:any /* org.jboss.forge.addon.parser.java.resources.JavaResourceVisitor */ ):void;

} // end JavaSourceFacet

} // end namespace org.jboss.forge.addon.parser.java.facets
declare namespace java.lang {

class String/* extends ObjectString implements java.io.Serializable, Comparable<any>, CharSequence*/ {

	charAt( arg0:int ):any /* char */;
	chars(  ):any /* java.util.stream.IntStream */;
	codePointAt( arg0:int ):int;
	codePointBefore( arg0:int ):int;
	codePointCount( arg0:int, arg1:int ):int;
	codePoints(  ):any /* java.util.stream.IntStream */;
	compareTo( arg0:string ):int;
	compareToIgnoreCase( arg0:string ):int;
	concat( arg0:string ):string;
	contains( arg0:any /* java.lang.CharSequence */ ):boolean;
	contentEquals( arg0:any /* java.lang.CharSequence */ ):boolean;
	contentEquals( arg0:any /* java.lang.StringBuffer */ ):boolean;
	endsWith( arg0:string ):boolean;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	equalsIgnoreCase( arg0:string ):boolean;
	getBytes(  ):bytearray;
	getBytes( arg0:any /* java.nio.charset.Charset */ ):bytearray;
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
	replace( arg0:any /* char */, arg1:any /* char */ ):string;
	replace( arg0:any /* java.lang.CharSequence */, arg1:any /* java.lang.CharSequence */ ):string;
	replaceAll( arg0:string, arg1:string ):string;
	replaceFirst( arg0:string, arg1:string ):string;
	split( arg0:string ):[any] /* [Ljava.lang.String; */;
	split( arg0:string, arg1:int ):[any] /* [Ljava.lang.String; */;
	startsWith( arg0:string ):boolean;
	startsWith( arg0:string, arg1:int ):boolean;
	subSequence( arg0:int, arg1:int ):any /* java.lang.CharSequence */;
	substring( arg0:int ):string;
	substring( arg0:int, arg1:int ):string;
	toCharArray(  ):chararray;
	toLowerCase(  ):string;
	toLowerCase( arg0:any /* java.util.Locale */ ):string;
	toString(  ):string;
	toUpperCase(  ):string;
	toUpperCase( arg0:any /* java.util.Locale */ ):string;
	trim(  ):string;

} // end String

} // end namespace java.lang
declare namespace org.jboss.forge.addon.dependencies.builder {

class CoordinateBuilder/* extends java.lang.ObjectCoordinateBuilder implements org.jboss.forge.addon.dependencies.Coordinate*/ {

	equals( arg0:any /* java.lang.Object */ ):boolean;
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
declare namespace org.jboss.forge.addon.maven.plugins {

class ConfigurationBuilder/* extends java.lang.ObjectConfigurationBuilder implements Configuration*/ {

	addConfigurationElement( arg0:ConfigurationElement ):Configuration;
	createConfigurationElement( arg0:string ):ConfigurationElementBuilder;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	getConfigurationElement( arg0:string ):ConfigurationElement;
	getOrigin(  ):MavenPluginBuilder;
	hasConfigurationElement( arg0:string ):boolean;
	hasConfigurationElements(  ):boolean;
	listConfigurationElements(  ):java.util.List<any>;
	removeConfigurationElement( arg0:string ):void;
	toString(  ):string;

} // end ConfigurationBuilder

} // end namespace org.jboss.forge.addon.maven.plugins
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
declare namespace org.jboss.forge.addon.projects {

interface Project/*Project extends org.jboss.forge.addon.facets.Faceted<any>*/ {

	getAttribute( arg0:any /* java.lang.Object */ ):any /* java.lang.Object */;
	getFacet( arg0:java.lang.Class<any> ):any /* org.jboss.forge.addon.facets.Facet */;
	getFacetAsOptional( arg0:java.lang.Class<any> ):java.util.Optional<any>;
	getFacets(  ):java.lang.Iterable<any>;
	getFacets( arg0:java.lang.Class<any> ):java.lang.Iterable<any>;
	getRoot(  ):any /* org.jboss.forge.addon.resource.Resource */;
	getRootDirectory(  ):any /* org.jboss.forge.addon.resource.DirectoryResource */;
	getStack(  ):java.util.Optional<any>;
	hasAllFacets( arg0:[any] /* [Ljava.lang.Class; */ ):boolean;
	hasAllFacets( arg0:java.lang.Iterable<any> ):boolean;
	hasFacet( arg0:java.lang.Class<any> ):boolean;
	removeAttribute( arg0:any /* java.lang.Object */ ):void;
	setAttribute( arg0:any /* java.lang.Object */, arg1:any /* java.lang.Object */ ):void;
	supports( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;

} // end Project

} // end namespace org.jboss.forge.addon.projects
declare namespace java.util {

class Optional<T>/* extends java.lang.Object*/ {

	equals( arg0:any /* java.lang.Object */ ):boolean;
	filter( arg0:Predicate<T> ):Optional<T>;
	flatMap( arg0:any /* java.util.function.Function */ ):Optional<T>;
	get(  ):any /* java.lang.Object */;
	ifPresent( arg0:Consumer<T> ):void;
	isPresent(  ):boolean;
	map( arg0:any /* java.util.function.Function */ ):Optional<T>;
	orElse( arg0:any /* java.lang.Object */ ):any /* java.lang.Object */;
	orElseGet( arg0:Supplier<T> ):any /* java.lang.Object */;
	orElseThrow( arg0:Supplier<T> ):any /* java.lang.Object */;
	toString(  ):string;

} // end Optional<T>

} // end namespace java.util
declare namespace org.jboss.forge.addon.ui.result {

class Results/* extends java.lang.Object*/ {

	equals( arg0:any /* java.lang.Object */ ):boolean;
	static aggregate( arg0:java.lang.Iterable<any> ):any /* org.jboss.forge.addon.ui.result.CompositeResult */;
	static fail(  ):Result;
	static fail( arg0:string ):Result;
	static fail( arg0:string, arg1:any /* java.lang.Throwable */ ):Result;
	static navigateTo( arg0:[any] /* [Ljava.lang.Class; */ ):NavigationResult;
	static navigateTo( arg0:java.lang.Class<any> ):NavigationResult;
	static navigateTo( arg0:java.lang.Class<any>, arg1:[any] /* [Ljava.lang.Class; */ ):NavigationResult;
	static navigationBuilder(  ):any /* org.jboss.forge.addon.ui.result.navigation.NavigationResultBuilder */;
	static success(  ):Result;
	static success( arg0:string ):Result;
	toString(  ):string;

} // end Results

} // end namespace org.jboss.forge.addon.ui.result
declare namespace org.jboss.forge.addon.ui.metadata {

interface UICommandMetadata {

	getCategory(  ):any /* org.jboss.forge.addon.ui.metadata.UICategory */;
	getDeprecatedMessage(  ):string;
	getDescription(  ):string;
	getDocLocation(  ):any /* java.net.URL */;
	getLongDescription(  ):string;
	getName(  ):string;
	getType(  ):java.lang.Class<any>;
	isDeprecated(  ):boolean;

} // end UICommandMetadata

} // end namespace org.jboss.forge.addon.ui.metadata
declare namespace org.jboss.forge.addon.ui.input {

interface UIInputMany<VALUETYPE>/*UIInputMany<VALUETYPE> extends InputComponent<any, VALUETYPE>, ManyValued<any, VALUETYPE>, HasCompleter<any, VALUETYPE>*/ {

	addValidator( arg0:any /* org.jboss.forge.addon.ui.validate.UIValidator */ ):any /* java.lang.Object */;
	addValueChangeListener( arg0:any /* org.jboss.forge.addon.ui.input.ValueChangeListener */ ):any /* org.jboss.forge.furnace.spi.ListenerRegistration */;
	getCompleter(  ):any /* org.jboss.forge.addon.ui.input.UICompleter */;
	getDeprecatedMessage(  ):string;
	getDescription(  ):string;
	getFacet( arg0:java.lang.Class<VALUETYPE> ):any /* org.jboss.forge.addon.facets.Facet */;
	getFacetAsOptional( arg0:java.lang.Class<VALUETYPE> ):java.util.Optional<VALUETYPE>;
	getFacets(  ):java.lang.Iterable<VALUETYPE>;
	getFacets( arg0:java.lang.Class<VALUETYPE> ):java.lang.Iterable<VALUETYPE>;
	getLabel(  ):string;
	getName(  ):string;
	getNote(  ):string;
	getRequiredMessage(  ):string;
	getShortName(  ):any /* char */;
	getValidators(  ):java.util.Set<VALUETYPE>;
	getValue(  ):any /* java.lang.Object */;
	getValue(  ):java.lang.Iterable<VALUETYPE>;
	getValueConverter(  ):any /* org.jboss.forge.addon.convert.Converter */;
	getValueType(  ):java.lang.Class<VALUETYPE>;
	hasAllFacets( arg0:[any] /* [Ljava.lang.Class; */ ):boolean;
	hasAllFacets( arg0:java.lang.Iterable<VALUETYPE> ):boolean;
	hasDefaultValue(  ):boolean;
	hasFacet( arg0:java.lang.Class<VALUETYPE> ):boolean;
	hasValue(  ):boolean;
	install( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	isDeprecated(  ):boolean;
	isEnabled(  ):boolean;
	isRequired(  ):boolean;
	register( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	setCompleter( arg0:any /* org.jboss.forge.addon.ui.input.UICompleter */ ):any /* java.lang.Object */;
	setDefaultValue( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setDefaultValue( arg0:java.lang.Iterable<VALUETYPE> ):any /* java.lang.Object */;
	setDeprecated( arg0:boolean ):any /* java.lang.Object */;
	setDeprecatedMessage( arg0:string ):any /* java.lang.Object */;
	setDescription( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setDescription( arg0:string ):any /* java.lang.Object */;
	setEnabled( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setEnabled( arg0:boolean ):any /* java.lang.Object */;
	setLabel( arg0:string ):any /* java.lang.Object */;
	setNote( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setNote( arg0:string ):any /* java.lang.Object */;
	setRequired( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setRequired( arg0:boolean ):any /* java.lang.Object */;
	setRequiredMessage( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setRequiredMessage( arg0:string ):any /* java.lang.Object */;
	setValue( arg0:java.lang.Iterable<VALUETYPE> ):any /* java.lang.Object */;
	setValueConverter( arg0:any /* org.jboss.forge.addon.convert.Converter */ ):any /* java.lang.Object */;
	supports( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	uninstall( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	unregister( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	validate( arg0:org.jboss.forge.addon.ui.context.UIValidationContext ):void;

} // end UIInputMany<VALUETYPE>

} // end namespace org.jboss.forge.addon.ui.input
declare namespace org.jboss.forge.addon.maven.projects {

interface MavenFacet/*MavenFacet extends org.jboss.forge.addon.projects.ProvidedProjectFacet*/ {

	executeMaven( arg0:java.util.List<any> ):boolean;
	executeMavenEmbedded( arg0:java.util.List<any> ):boolean;
	executeMavenEmbedded( arg0:java.util.List<any>, arg1:any /* java.io.PrintStream */, arg2:any /* java.io.PrintStream */ ):boolean;
	getEffectiveModel(  ):any /* org.apache.maven.model.Model */;
	getEffectiveModelBuildResult(  ):any /* org.jboss.forge.addon.projects.building.BuildResult */;
	getFaceted(  ):any /* org.jboss.forge.addon.facets.Faceted */;
	getLocalRepositoryDirectory(  ):any /* org.jboss.forge.addon.resource.DirectoryResource */;
	getModel(  ):any /* org.apache.maven.model.Model */;
	getModelResource(  ):any /* org.jboss.forge.addon.maven.resources.MavenModelResource */;
	getProperties(  ):java.util.Map<any, any>;
	install(  ):boolean;
	isInstalled(  ):boolean;
	isModelValid(  ):boolean;
	resolveProperties( arg0:string ):string;
	setModel( arg0:any /* org.apache.maven.model.Model */ ):void;
	uninstall(  ):boolean;

} // end MavenFacet

} // end namespace org.jboss.forge.addon.maven.projects
declare namespace org.jboss.forge.addon.maven.plugins {

interface ConfigurationElement/*ConfigurationElement extends PluginElement*/ {

	getAttributes(  ):java.util.Map<any, any>;
	getChildByContent( arg0:string ):ConfigurationElement;
	getChildByContent( arg0:string, arg1:boolean ):ConfigurationElement;
	getChildByName( arg0:string ):ConfigurationElement;
	getChildByName( arg0:string, arg1:boolean ):ConfigurationElement;
	getChildren(  ):java.util.List<any>;
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
declare namespace java.util {

interface Map<K, V> {

	clear(  ):void;
	compute( arg0:any /* java.lang.Object */, arg1:any /* java.util.function.BiFunction */ ):any /* java.lang.Object */;
	computeIfAbsent( arg0:any /* java.lang.Object */, arg1:any /* java.util.function.Function */ ):any /* java.lang.Object */;
	computeIfPresent( arg0:any /* java.lang.Object */, arg1:any /* java.util.function.BiFunction */ ):any /* java.lang.Object */;
	containsKey( arg0:any /* java.lang.Object */ ):boolean;
	containsValue( arg0:any /* java.lang.Object */ ):boolean;
	entrySet(  ):Set<any>;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	forEach( arg0:any /* java.util.function.BiConsumer */ ):void;
	get( arg0:any /* java.lang.Object */ ):any /* java.lang.Object */;
	getOrDefault( arg0:any /* java.lang.Object */, arg1:any /* java.lang.Object */ ):any /* java.lang.Object */;
	isEmpty(  ):boolean;
	keySet(  ):Set<any>;
	merge( arg0:any /* java.lang.Object */, arg1:any /* java.lang.Object */, arg2:any /* java.util.function.BiFunction */ ):any /* java.lang.Object */;
	put( arg0:any /* java.lang.Object */, arg1:any /* java.lang.Object */ ):any /* java.lang.Object */;
	putAll( arg0:Map<K, V> ):void;
	putIfAbsent( arg0:any /* java.lang.Object */, arg1:any /* java.lang.Object */ ):any /* java.lang.Object */;
	remove( arg0:any /* java.lang.Object */ ):any /* java.lang.Object */;
	remove( arg0:any /* java.lang.Object */, arg1:any /* java.lang.Object */ ):boolean;
	replace( arg0:any /* java.lang.Object */, arg1:any /* java.lang.Object */ ):any /* java.lang.Object */;
	replace( arg0:any /* java.lang.Object */, arg1:any /* java.lang.Object */, arg2:any /* java.lang.Object */ ):boolean;
	replaceAll( arg0:any /* java.util.function.BiFunction */ ):void;
	size(  ):int;
	values(  ):Collection<any>;

} // end Map<K, V>
export module Map {

interface Entry<K, V> {

	// static comparingByKey<T>(  ):any /* java.util.Comparator */;
	// static comparingByKey<T>( arg0:any /* java.util.Comparator */ ):any /* java.util.Comparator */;
	// static comparingByValue<T>(  ):any /* java.util.Comparator */;
	// static comparingByValue<T>( arg0:any /* java.util.Comparator */ ):any /* java.util.Comparator */;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	getKey(  ):any /* java.lang.Object */;
	getValue(  ):any /* java.lang.Object */;
	setValue( arg0:any /* java.lang.Object */ ):any /* java.lang.Object */;

} // end Entry<K, V>

} // end module Map

} // end namespace java.util
declare namespace org.jboss.forge.addon.ui.context {

interface UIExecutionContext/*UIExecutionContext extends UIContextProvider*/ {

	getProgressMonitor(  ):org.jboss.forge.addon.ui.progress.UIProgressMonitor;
	getPrompt(  ):org.jboss.forge.addon.ui.input.UIPrompt;
	getUIContext(  ):UIContext;

} // end UIExecutionContext

} // end namespace org.jboss.forge.addon.ui.context
declare namespace org.jboss.forge.addon.ui.wizard {

interface UIWizardStep/*UIWizardStep extends UIWizard*/ {

	execute( arg0:org.jboss.forge.addon.ui.context.UIExecutionContext ):org.jboss.forge.addon.ui.result.Result;
	getMetadata( arg0:org.jboss.forge.addon.ui.context.UIContext ):org.jboss.forge.addon.ui.metadata.UICommandMetadata;
	initializeUI( arg0:org.jboss.forge.addon.ui.context.UIBuilder ):void;
	isEnabled( arg0:org.jboss.forge.addon.ui.context.UIContext ):boolean;
	next( arg0:org.jboss.forge.addon.ui.context.UINavigationContext ):org.jboss.forge.addon.ui.result.NavigationResult;
	validate( arg0:org.jboss.forge.addon.ui.context.UIValidationContext ):void;

} // end UIWizardStep

} // end namespace org.jboss.forge.addon.ui.wizard
declare namespace org.jboss.forge.addon.ui.wizard {

interface UIWizard/*UIWizard extends org.jboss.forge.addon.ui.command.UICommand*/ {

	execute( arg0:org.jboss.forge.addon.ui.context.UIExecutionContext ):org.jboss.forge.addon.ui.result.Result;
	getMetadata( arg0:org.jboss.forge.addon.ui.context.UIContext ):org.jboss.forge.addon.ui.metadata.UICommandMetadata;
	initializeUI( arg0:org.jboss.forge.addon.ui.context.UIBuilder ):void;
	isEnabled( arg0:org.jboss.forge.addon.ui.context.UIContext ):boolean;
	next( arg0:org.jboss.forge.addon.ui.context.UINavigationContext ):org.jboss.forge.addon.ui.result.NavigationResult;
	validate( arg0:org.jboss.forge.addon.ui.context.UIValidationContext ):void;

} // end UIWizard

} // end namespace org.jboss.forge.addon.ui.wizard
declare namespace org.jboss.forge.addon.dependencies {

interface Dependency {

	getArtifact(  ):any /* org.jboss.forge.addon.resource.FileResource */;
	getCoordinate(  ):Coordinate;
	getExcludedCoordinates(  ):java.util.List<any>;
	getScopeType(  ):string;
	isOptional(  ):boolean;

} // end Dependency

} // end namespace org.jboss.forge.addon.dependencies
declare namespace org.jboss.forge.addon.maven.plugins {

class ConfigurationElementBuilder/* extends java.lang.ObjectConfigurationElementBuilder implements ConfigurationElement*/ {

	addAttribute( arg0:string, arg1:string ):ConfigurationElementBuilder;
	addChild( arg0:PluginElement ):ConfigurationElementBuilder;
	addChild( arg0:string ):ConfigurationElementBuilder;
	createConfigurationElement( arg0:string ):ConfigurationElementBuilder;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	getAttributes(  ):java.util.Map<any, any>;
	getChildByContent( arg0:string ):ConfigurationElement;
	getChildByContent( arg0:string, arg1:boolean ):ConfigurationElement;
	getChildByName( arg0:string ):ConfigurationElement;
	getChildByName( arg0:string, arg1:boolean ):ConfigurationElement;
	getChildren(  ):java.util.List<any>;
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
declare namespace java.lang {

interface Iterable<T> {

	forEach( arg0:Consumer<T> ):void;
	iterator(  ):java.util.Iterator<T>;
	spliterator(  ):any /* java.util.Spliterator */;

} // end Iterable<T>

} // end namespace java.lang
declare namespace java.util.stream {

interface Stream<T>/*Stream<T> extends BaseStream<T, any>*/ {

	allMatch( arg0:Predicate<T> ):boolean;
	anyMatch( arg0:Predicate<T> ):boolean;
	close(  ):void;
	collect( arg0:Supplier<T>, arg1:any /* java.util.function.BiConsumer */, arg2:any /* java.util.function.BiConsumer */ ):any /* java.lang.Object */;
	collect( arg0:any /* java.util.stream.Collector */ ):any /* java.lang.Object */;
	count(  ):long;
	distinct(  ):Stream<T>;
	filter( arg0:Predicate<T> ):Stream<T>;
	findAny(  ):java.util.Optional<T>;
	findFirst(  ):java.util.Optional<T>;
	flatMap( arg0:any /* java.util.function.Function */ ):Stream<T>;
	flatMapToDouble( arg0:any /* java.util.function.Function */ ):any /* java.util.stream.DoubleStream */;
	flatMapToInt( arg0:any /* java.util.function.Function */ ):any /* java.util.stream.IntStream */;
	flatMapToLong( arg0:any /* java.util.function.Function */ ):any /* java.util.stream.LongStream */;
	forEach( arg0:Consumer<T> ):void;
	forEachOrdered( arg0:Consumer<T> ):void;
	isParallel(  ):boolean;
	iterator(  ):java.util.Iterator<T>;
	limit( arg0:long ):Stream<T>;
	map( arg0:any /* java.util.function.Function */ ):Stream<T>;
	mapToDouble( arg0:any /* java.util.function.ToDoubleFunction */ ):any /* java.util.stream.DoubleStream */;
	mapToInt( arg0:any /* java.util.function.ToIntFunction */ ):any /* java.util.stream.IntStream */;
	mapToLong( arg0:any /* java.util.function.ToLongFunction */ ):any /* java.util.stream.LongStream */;
	max( arg0:any /* java.util.Comparator */ ):java.util.Optional<T>;
	min( arg0:any /* java.util.Comparator */ ):java.util.Optional<T>;
	noneMatch( arg0:Predicate<T> ):boolean;
	onClose( arg0:Runnable ):any /* java.util.stream.BaseStream */;
	parallel(  ):any /* java.util.stream.BaseStream */;
	peek( arg0:Consumer<T> ):Stream<T>;
	reduce( arg0:any /* java.lang.Object */, arg1:any /* java.util.function.BiFunction */, arg2:any /* java.util.function.BinaryOperator */ ):any /* java.lang.Object */;
	reduce( arg0:any /* java.lang.Object */, arg1:any /* java.util.function.BinaryOperator */ ):any /* java.lang.Object */;
	reduce( arg0:any /* java.util.function.BinaryOperator */ ):java.util.Optional<T>;
	sequential(  ):any /* java.util.stream.BaseStream */;
	skip( arg0:long ):Stream<T>;
	sorted(  ):Stream<T>;
	sorted( arg0:any /* java.util.Comparator */ ):Stream<T>;
	spliterator(  ):any /* java.util.Spliterator */;
	toArray(  ):[any] /* [Ljava.lang.Object; */;
	toArray( arg0:any /* java.util.function.IntFunction */ ):[any] /* [Ljava.lang.Object; */;
	unordered(  ):any /* java.util.stream.BaseStream */;

} // end Stream<T>
export module Stream {

interface Builder<T>/*Builder<T> extends Consumer<T>*/ {

	accept( arg0:any /* java.lang.Object */ ):void;
	add( arg0:any /* java.lang.Object */ ):any /* java.util.stream.Stream$Builder */;
	andThen( arg0:Consumer<T> ):Consumer<T>;
	build(  ):Stream<T>;

} // end Builder<T>

} // end module Stream

} // end namespace java.util.stream
declare namespace org.jboss.forge.addon.ui.output {

interface UIMessage {

	getDescription(  ):string;
	getSeverity(  ):any /* org.jboss.forge.addon.ui.output.UIMessage$Severity */;
	getSource(  ):any /* org.jboss.forge.addon.ui.input.InputComponent */;

} // end UIMessage
export module UIMessage {

/* enum */class Severity/* extends java.lang.Enum<any>*/ {

	static ERROR:Severity;
	static WARN:Severity;
	static INFO:Severity;

	compareTo( arg0:any /* java.lang.Enum */ ):int;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	getDeclaringClass(  ):java.lang.Class<any>;
	name(  ):string;
	ordinal(  ):int;
	static valueOf( arg0:string ):any /* org.jboss.forge.addon.ui.output.UIMessage$Severity */;
	static valueOf<E>( arg0:java.lang.Class<any>, arg1:string ):any /* java.lang.Enum */;
	static values(  ):[any] /* [Lorg.jboss.forge.addon.ui.output.UIMessage$Severity; */;
	toString(  ):string;

} // end Severity

} // end module UIMessage

} // end namespace org.jboss.forge.addon.ui.output
declare namespace org.jboss.forge.addon.maven.plugins {

interface Execution {

	getConfig(  ):Configuration;
	getGoals(  ):java.util.List<any>;
	getId(  ):string;
	getPhase(  ):string;

} // end Execution

} // end namespace org.jboss.forge.addon.maven.plugins
declare namespace org.jboss.forge.addon.maven.plugins {

interface MavenPlugin/*MavenPlugin extends PluginElement*/ {

	getConfig(  ):Configuration;
	getCoordinate(  ):org.jboss.forge.addon.dependencies.Coordinate;
	getDirectDependencies(  ):java.util.List<any>;
	isExtensionsEnabled(  ):boolean;
	listExecutions(  ):java.util.List<any>;

} // end MavenPlugin

} // end namespace org.jboss.forge.addon.maven.plugins
declare namespace org.jboss.forge.addon.ui.input {

interface UIInput<VALUETYPE>/*UIInput<VALUETYPE> extends InputComponent<any, VALUETYPE>, SingleValued<any, VALUETYPE>, HasCompleter<any, VALUETYPE>*/ {

	addValidator( arg0:any /* org.jboss.forge.addon.ui.validate.UIValidator */ ):any /* java.lang.Object */;
	addValueChangeListener( arg0:any /* org.jboss.forge.addon.ui.input.ValueChangeListener */ ):any /* org.jboss.forge.furnace.spi.ListenerRegistration */;
	getCompleter(  ):any /* org.jboss.forge.addon.ui.input.UICompleter */;
	getDeprecatedMessage(  ):string;
	getDescription(  ):string;
	getFacet( arg0:java.lang.Class<VALUETYPE> ):any /* org.jboss.forge.addon.facets.Facet */;
	getFacetAsOptional( arg0:java.lang.Class<VALUETYPE> ):java.util.Optional<VALUETYPE>;
	getFacets(  ):java.lang.Iterable<VALUETYPE>;
	getFacets( arg0:java.lang.Class<VALUETYPE> ):java.lang.Iterable<VALUETYPE>;
	getLabel(  ):string;
	getName(  ):string;
	getNote(  ):string;
	getRequiredMessage(  ):string;
	getShortName(  ):any /* char */;
	getValidators(  ):java.util.Set<VALUETYPE>;
	getValue(  ):any /* java.lang.Object */;
	getValue(  ):any /* java.lang.Object */;
	getValueConverter(  ):any /* org.jboss.forge.addon.convert.Converter */;
	getValueType(  ):java.lang.Class<VALUETYPE>;
	hasAllFacets( arg0:[any] /* [Ljava.lang.Class; */ ):boolean;
	hasAllFacets( arg0:java.lang.Iterable<VALUETYPE> ):boolean;
	hasDefaultValue(  ):boolean;
	hasFacet( arg0:java.lang.Class<VALUETYPE> ):boolean;
	hasValue(  ):boolean;
	install( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	isDeprecated(  ):boolean;
	isEnabled(  ):boolean;
	isRequired(  ):boolean;
	register( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	setCompleter( arg0:any /* org.jboss.forge.addon.ui.input.UICompleter */ ):any /* java.lang.Object */;
	setDefaultValue( arg0:any /* java.lang.Object */ ):any /* java.lang.Object */;
	setDefaultValue( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setDeprecated( arg0:boolean ):any /* java.lang.Object */;
	setDeprecatedMessage( arg0:string ):any /* java.lang.Object */;
	setDescription( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setDescription( arg0:string ):any /* java.lang.Object */;
	setEnabled( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setEnabled( arg0:boolean ):any /* java.lang.Object */;
	setLabel( arg0:string ):any /* java.lang.Object */;
	setNote( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setNote( arg0:string ):any /* java.lang.Object */;
	setRequired( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setRequired( arg0:boolean ):any /* java.lang.Object */;
	setRequiredMessage( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setRequiredMessage( arg0:string ):any /* java.lang.Object */;
	setValue( arg0:any /* java.lang.Object */ ):any /* java.lang.Object */;
	setValueConverter( arg0:any /* org.jboss.forge.addon.convert.Converter */ ):any /* java.lang.Object */;
	supports( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	uninstall( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	unregister( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	validate( arg0:org.jboss.forge.addon.ui.context.UIValidationContext ):void;

} // end UIInput<VALUETYPE>

} // end namespace org.jboss.forge.addon.ui.input
declare namespace org.jboss.forge.addon.maven.plugins {

interface PluginElement {


} // end PluginElement

} // end namespace org.jboss.forge.addon.maven.plugins
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
declare namespace java.util {

interface List<E>/*List<E> extends Collection<E>*/ {

	add( arg0:any /* java.lang.Object */ ):boolean;
	add( arg0:int, arg1:any /* java.lang.Object */ ):void;
	addAll( arg0:Collection<E> ):boolean;
	addAll( arg0:int, arg1:Collection<E> ):boolean;
	clear(  ):void;
	contains( arg0:any /* java.lang.Object */ ):boolean;
	containsAll( arg0:Collection<E> ):boolean;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	forEach( arg0:Consumer<E> ):void;
	get( arg0:int ):any /* java.lang.Object */;
	indexOf( arg0:any /* java.lang.Object */ ):int;
	isEmpty(  ):boolean;
	iterator(  ):Iterator<E>;
	lastIndexOf( arg0:any /* java.lang.Object */ ):int;
	listIterator(  ):any /* java.util.ListIterator */;
	listIterator( arg0:int ):any /* java.util.ListIterator */;
	parallelStream(  ):java.util.stream.Stream<E>;
	remove( arg0:any /* java.lang.Object */ ):boolean;
	remove( arg0:int ):any /* java.lang.Object */;
	removeAll( arg0:Collection<E> ):boolean;
	removeIf( arg0:Predicate<E> ):boolean;
	replaceAll( arg0:UnaryOperator<E> ):void;
	retainAll( arg0:Collection<E> ):boolean;
	set( arg0:int, arg1:any /* java.lang.Object */ ):any /* java.lang.Object */;
	size(  ):int;
	sort( arg0:any /* java.util.Comparator */ ):void;
	spliterator(  ):any /* java.util.Spliterator */;
	stream(  ):java.util.stream.Stream<E>;
	subList( arg0:int, arg1:int ):List<E>;
	toArray(  ):[any] /* [Ljava.lang.Object; */;
	toArray( arg0:[any] /* [Ljava.lang.Object; */ ):[any] /* [Ljava.lang.Object; */;

} // end List<E>

} // end namespace java.util
declare namespace org.jboss.forge.addon.ui.context {

interface UIValidationContext/*UIValidationContext extends UIContextProvider*/ {

	addValidationError( arg0:any /* org.jboss.forge.addon.ui.input.InputComponent */, arg1:string ):void;
	addValidationInformation( arg0:any /* org.jboss.forge.addon.ui.input.InputComponent */, arg1:string ):void;
	addValidationWarning( arg0:any /* org.jboss.forge.addon.ui.input.InputComponent */, arg1:string ):void;
	getCurrentInputComponent(  ):any /* org.jboss.forge.addon.ui.input.InputComponent */;
	getMessages(  ):java.util.List<any>;
	getUIContext(  ):UIContext;

} // end UIValidationContext

} // end namespace org.jboss.forge.addon.ui.context
declare namespace org.jboss.forge.addon.ui.input {

interface UISelectMany<VALUETYPE>/*UISelectMany<VALUETYPE> extends SelectComponent<any, VALUETYPE>, ManyValued<any, VALUETYPE>*/ {

	addValidator( arg0:any /* org.jboss.forge.addon.ui.validate.UIValidator */ ):any /* java.lang.Object */;
	addValueChangeListener( arg0:any /* org.jboss.forge.addon.ui.input.ValueChangeListener */ ):any /* org.jboss.forge.furnace.spi.ListenerRegistration */;
	getDeprecatedMessage(  ):string;
	getDescription(  ):string;
	getFacet( arg0:java.lang.Class<VALUETYPE> ):any /* org.jboss.forge.addon.facets.Facet */;
	getFacetAsOptional( arg0:java.lang.Class<VALUETYPE> ):java.util.Optional<VALUETYPE>;
	getFacets(  ):java.lang.Iterable<VALUETYPE>;
	getFacets( arg0:java.lang.Class<VALUETYPE> ):java.lang.Iterable<VALUETYPE>;
	getItemLabelConverter(  ):any /* org.jboss.forge.addon.convert.Converter */;
	getLabel(  ):string;
	getName(  ):string;
	getNote(  ):string;
	getRequiredMessage(  ):string;
	getSelectedIndexes(  ):[any] /* [I */;
	getShortName(  ):any /* char */;
	getValidators(  ):java.util.Set<VALUETYPE>;
	getValue(  ):any /* java.lang.Object */;
	getValue(  ):java.lang.Iterable<VALUETYPE>;
	getValueChoices(  ):java.lang.Iterable<VALUETYPE>;
	getValueConverter(  ):any /* org.jboss.forge.addon.convert.Converter */;
	getValueType(  ):java.lang.Class<VALUETYPE>;
	hasAllFacets( arg0:[any] /* [Ljava.lang.Class; */ ):boolean;
	hasAllFacets( arg0:java.lang.Iterable<VALUETYPE> ):boolean;
	hasDefaultValue(  ):boolean;
	hasFacet( arg0:java.lang.Class<VALUETYPE> ):boolean;
	hasValue(  ):boolean;
	install( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	isDeprecated(  ):boolean;
	isEnabled(  ):boolean;
	isRequired(  ):boolean;
	register( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	setDefaultValue( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setDefaultValue( arg0:java.lang.Iterable<VALUETYPE> ):any /* java.lang.Object */;
	setDeprecated( arg0:boolean ):any /* java.lang.Object */;
	setDeprecatedMessage( arg0:string ):any /* java.lang.Object */;
	setDescription( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setDescription( arg0:string ):any /* java.lang.Object */;
	setEnabled( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setEnabled( arg0:boolean ):any /* java.lang.Object */;
	setItemLabelConverter( arg0:any /* org.jboss.forge.addon.convert.Converter */ ):any /* java.lang.Object */;
	setLabel( arg0:string ):any /* java.lang.Object */;
	setNote( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setNote( arg0:string ):any /* java.lang.Object */;
	setRequired( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setRequired( arg0:boolean ):any /* java.lang.Object */;
	setRequiredMessage( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setRequiredMessage( arg0:string ):any /* java.lang.Object */;
	setValue( arg0:java.lang.Iterable<VALUETYPE> ):any /* java.lang.Object */;
	setValueChoices( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setValueChoices( arg0:java.lang.Iterable<VALUETYPE> ):any /* java.lang.Object */;
	setValueConverter( arg0:any /* org.jboss.forge.addon.convert.Converter */ ):any /* java.lang.Object */;
	supports( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	uninstall( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	unregister( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	validate( arg0:org.jboss.forge.addon.ui.context.UIValidationContext ):void;

} // end UISelectMany<VALUETYPE>

} // end namespace org.jboss.forge.addon.ui.input
declare namespace org.apache.maven.model {

class Dependency/* extends java.lang.ObjectDependency implements java.io.Serializable, java.lang.Cloneable, InputLocationTracker*/ {

	addExclusion( arg0:Exclusion ):void;
	clone(  ):Dependency;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	getArtifactId(  ):string;
	getClassifier(  ):string;
	getExclusions(  ):java.util.List<any>;
	getGroupId(  ):string;
	getLocation( arg0:any /* java.lang.Object */ ):any /* org.apache.maven.model.InputLocation */;
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
	setExclusions( arg0:java.util.List<any> ):void;
	setGroupId( arg0:string ):void;
	setLocation( arg0:any /* java.lang.Object */, arg1:any /* org.apache.maven.model.InputLocation */ ):void;
	setOptional( arg0:boolean ):void;
	setOptional( arg0:string ):void;
	setScope( arg0:string ):void;
	setSystemPath( arg0:string ):void;
	setType( arg0:string ):void;
	setVersion( arg0:string ):void;
	toString(  ):string;

} // end Dependency

} // end namespace org.apache.maven.model
declare namespace org.jboss.forge.addon.ui.input {

interface UISelectOne<VALUETYPE>/*UISelectOne<VALUETYPE> extends SelectComponent<any, VALUETYPE>, SingleValued<any, VALUETYPE>*/ {

	addValidator( arg0:any /* org.jboss.forge.addon.ui.validate.UIValidator */ ):any /* java.lang.Object */;
	addValueChangeListener( arg0:any /* org.jboss.forge.addon.ui.input.ValueChangeListener */ ):any /* org.jboss.forge.furnace.spi.ListenerRegistration */;
	getDeprecatedMessage(  ):string;
	getDescription(  ):string;
	getFacet( arg0:java.lang.Class<VALUETYPE> ):any /* org.jboss.forge.addon.facets.Facet */;
	getFacetAsOptional( arg0:java.lang.Class<VALUETYPE> ):java.util.Optional<VALUETYPE>;
	getFacets(  ):java.lang.Iterable<VALUETYPE>;
	getFacets( arg0:java.lang.Class<VALUETYPE> ):java.lang.Iterable<VALUETYPE>;
	getItemLabelConverter(  ):any /* org.jboss.forge.addon.convert.Converter */;
	getLabel(  ):string;
	getName(  ):string;
	getNote(  ):string;
	getRequiredMessage(  ):string;
	getSelectedIndex(  ):int;
	getShortName(  ):any /* char */;
	getValidators(  ):java.util.Set<VALUETYPE>;
	getValue(  ):any /* java.lang.Object */;
	getValue(  ):any /* java.lang.Object */;
	getValueChoices(  ):java.lang.Iterable<VALUETYPE>;
	getValueConverter(  ):any /* org.jboss.forge.addon.convert.Converter */;
	getValueType(  ):java.lang.Class<VALUETYPE>;
	hasAllFacets( arg0:[any] /* [Ljava.lang.Class; */ ):boolean;
	hasAllFacets( arg0:java.lang.Iterable<VALUETYPE> ):boolean;
	hasDefaultValue(  ):boolean;
	hasFacet( arg0:java.lang.Class<VALUETYPE> ):boolean;
	hasValue(  ):boolean;
	install( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	isDeprecated(  ):boolean;
	isEnabled(  ):boolean;
	isRequired(  ):boolean;
	register( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	setDefaultValue( arg0:any /* java.lang.Object */ ):any /* java.lang.Object */;
	setDefaultValue( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setDeprecated( arg0:boolean ):any /* java.lang.Object */;
	setDeprecatedMessage( arg0:string ):any /* java.lang.Object */;
	setDescription( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setDescription( arg0:string ):any /* java.lang.Object */;
	setEnabled( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setEnabled( arg0:boolean ):any /* java.lang.Object */;
	setItemLabelConverter( arg0:any /* org.jboss.forge.addon.convert.Converter */ ):any /* java.lang.Object */;
	setLabel( arg0:string ):any /* java.lang.Object */;
	setNote( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setNote( arg0:string ):any /* java.lang.Object */;
	setRequired( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setRequired( arg0:boolean ):any /* java.lang.Object */;
	setRequiredMessage( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setRequiredMessage( arg0:string ):any /* java.lang.Object */;
	setValue( arg0:any /* java.lang.Object */ ):any /* java.lang.Object */;
	setValueChoices( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setValueChoices( arg0:java.lang.Iterable<VALUETYPE> ):any /* java.lang.Object */;
	setValueConverter( arg0:any /* org.jboss.forge.addon.convert.Converter */ ):any /* java.lang.Object */;
	supports( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	uninstall( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	unregister( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	validate( arg0:org.jboss.forge.addon.ui.context.UIValidationContext ):void;

} // end UISelectOne<VALUETYPE>

} // end namespace org.jboss.forge.addon.ui.input
declare namespace org.apache.maven.model {

class Exclusion/* extends java.lang.ObjectExclusion implements java.io.Serializable, java.lang.Cloneable, InputLocationTracker*/ {

	clone(  ):Exclusion;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	getArtifactId(  ):string;
	getGroupId(  ):string;
	getLocation( arg0:any /* java.lang.Object */ ):any /* org.apache.maven.model.InputLocation */;
	setArtifactId( arg0:string ):void;
	setGroupId( arg0:string ):void;
	setLocation( arg0:any /* java.lang.Object */, arg1:any /* org.apache.maven.model.InputLocation */ ):void;
	toString(  ):string;

} // end Exclusion

} // end namespace org.apache.maven.model
declare namespace org.jboss.forge.addon.ui.context {

interface UIContextProvider {

	getUIContext(  ):UIContext;

} // end UIContextProvider

} // end namespace org.jboss.forge.addon.ui.context
declare namespace java.util {

interface Collection<E>/*Collection<E> extends java.lang.Iterable<E>*/ {

	add( arg0:any /* java.lang.Object */ ):boolean;
	addAll( arg0:Collection<E> ):boolean;
	clear(  ):void;
	contains( arg0:any /* java.lang.Object */ ):boolean;
	containsAll( arg0:Collection<E> ):boolean;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	forEach( arg0:Consumer<E> ):void;
	isEmpty(  ):boolean;
	iterator(  ):Iterator<E>;
	parallelStream(  ):java.util.stream.Stream<E>;
	remove( arg0:any /* java.lang.Object */ ):boolean;
	removeAll( arg0:Collection<E> ):boolean;
	removeIf( arg0:Predicate<E> ):boolean;
	retainAll( arg0:Collection<E> ):boolean;
	size(  ):int;
	spliterator(  ):any /* java.util.Spliterator */;
	stream(  ):java.util.stream.Stream<E>;
	toArray(  ):[any] /* [Ljava.lang.Object; */;
	toArray( arg0:[any] /* [Ljava.lang.Object; */ ):[any] /* [Ljava.lang.Object; */;

} // end Collection<E>

} // end namespace java.util
declare namespace org.jboss.forge.addon.ui.result {

interface Result {

	getMessage(  ):string;

} // end Result

} // end namespace org.jboss.forge.addon.ui.result
declare namespace org.jboss.forge.addon.dependencies {

class DependencyRepository/* extends java.lang.Object*/ {

	equals( arg0:any /* java.lang.Object */ ):boolean;
	getId(  ):string;
	getUrl(  ):string;
	toString(  ):string;

} // end DependencyRepository

} // end namespace org.jboss.forge.addon.dependencies
declare namespace org.jboss.forge.addon.dependencies.builder {

class DependencyBuilder/* extends java.lang.ObjectDependencyBuilder implements org.jboss.forge.addon.dependencies.Dependency*/ {

	addExclusion( arg0:org.jboss.forge.addon.dependencies.Coordinate ):DependencyBuilder;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	getArtifact(  ):any /* org.jboss.forge.addon.resource.FileResource */;
	getCoordinate(  ):CoordinateBuilder;
	getExcludedCoordinates(  ):java.util.List<any>;
	getGroupId(  ):string;
	getScopeType(  ):string;
	isOptional(  ):boolean;
	setArtifact( arg0:any /* org.jboss.forge.addon.resource.FileResource */ ):DependencyBuilder;
	setArtifactId( arg0:string ):DependencyBuilder;
	setClassifier( arg0:string ):DependencyBuilder;
	setCoordinate( arg0:org.jboss.forge.addon.dependencies.Coordinate ):DependencyBuilder;
	setExcludedCoordinates( arg0:java.util.List<any> ):DependencyBuilder;
	setGroupId( arg0:string ):DependencyBuilder;
	setOptional( arg0:boolean ):DependencyBuilder;
	setPackaging( arg0:string ):DependencyBuilder;
	setScopeType( arg0:string ):DependencyBuilder;
	setVersion( arg0:string ):DependencyBuilder;
	toString(  ):string;

} // end DependencyBuilder

} // end namespace org.jboss.forge.addon.dependencies.builder
declare namespace org.jboss.forge.addon.ui.input {

interface InputComponentFactory {

	createInput( arg0:string, arg1:any /* char */, arg2:java.lang.Class<any> ):UIInput<any>;
	createInput( arg0:string, arg1:java.lang.Class<any> ):UIInput<any>;
	createInputMany( arg0:string, arg1:any /* char */, arg2:java.lang.Class<any> ):UIInputMany<any>;
	createInputMany( arg0:string, arg1:java.lang.Class<any> ):UIInputMany<any>;
	createSelectMany( arg0:string, arg1:any /* char */, arg2:java.lang.Class<any> ):UISelectMany<any>;
	createSelectMany( arg0:string, arg1:java.lang.Class<any> ):UISelectMany<any>;
	createSelectOne( arg0:string, arg1:any /* char */, arg2:java.lang.Class<any> ):UISelectOne<any>;
	createSelectOne( arg0:string, arg1:java.lang.Class<any> ):UISelectOne<any>;

} // end InputComponentFactory

} // end namespace org.jboss.forge.addon.ui.input
declare namespace org.jboss.forge.addon.dependencies.builder {

class DependencyQueryBuilder/* extends java.lang.ObjectDependencyQueryBuilder implements org.jboss.forge.addon.dependencies.DependencyQuery*/ {

	equals( arg0:any /* java.lang.Object */ ):boolean;
	getCoordinate(  ):org.jboss.forge.addon.dependencies.Coordinate;
	getDependencyFilter(  ):any /* org.jboss.forge.furnace.util.Predicate */;
	getDependencyRepositories(  ):java.util.List<any>;
	getScopeType(  ):string;
	setFilter( arg0:any /* org.jboss.forge.furnace.util.Predicate */ ):DependencyQueryBuilder;
	setRepositories( arg0:[any] /* [Lorg.jboss.forge.addon.dependencies.DependencyRepository; */ ):DependencyQueryBuilder;
	setRepositories( arg0:java.lang.Iterable<any> ):DependencyQueryBuilder;
	setScopeType( arg0:string ):DependencyQueryBuilder;
	toString(  ):string;

} // end DependencyQueryBuilder

} // end namespace org.jboss.forge.addon.dependencies.builder
declare namespace org.jboss.forge.addon.dependencies {

interface DependencyResolver {

	resolveArtifact( arg0:any /* org.jboss.forge.addon.dependencies.DependencyQuery */ ):Dependency;
	resolveDependencies( arg0:any /* org.jboss.forge.addon.dependencies.DependencyQuery */ ):java.util.Set<any>;
	resolveDependencyHierarchy( arg0:any /* org.jboss.forge.addon.dependencies.DependencyQuery */ ):any /* org.jboss.forge.addon.dependencies.DependencyNode */;
	resolveDependencyMetadata( arg0:any /* org.jboss.forge.addon.dependencies.DependencyQuery */ ):any /* org.jboss.forge.addon.dependencies.DependencyMetadata */;
	resolveVersions( arg0:any /* org.jboss.forge.addon.dependencies.DependencyQuery */ ):java.util.List<any>;

} // end DependencyResolver

} // end namespace org.jboss.forge.addon.dependencies
declare namespace org.jboss.forge.addon.maven.plugins {

class ExecutionBuilder/* extends java.lang.ObjectExecutionBuilder implements Execution*/ {

	addGoal( arg0:string ):ExecutionBuilder;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	getConfig(  ):Configuration;
	getGoals(  ):java.util.List<any>;
	getId(  ):string;
	getPhase(  ):string;
	setConfig( arg0:Configuration ):ExecutionBuilder;
	setId( arg0:string ):ExecutionBuilder;
	setPhase( arg0:string ):ExecutionBuilder;
	toString(  ):string;

} // end ExecutionBuilder

} // end namespace org.jboss.forge.addon.maven.plugins
declare namespace org.jboss.forge.addon.ui.command {

interface CommandExecutionListener {

	postCommandExecuted( arg0:UICommand, arg1:org.jboss.forge.addon.ui.context.UIExecutionContext, arg2:org.jboss.forge.addon.ui.result.Result ):void;
	postCommandFailure( arg0:UICommand, arg1:org.jboss.forge.addon.ui.context.UIExecutionContext, arg2:any /* java.lang.Throwable */ ):void;
	preCommandExecuted( arg0:UICommand, arg1:org.jboss.forge.addon.ui.context.UIExecutionContext ):void;

} // end CommandExecutionListener

} // end namespace org.jboss.forge.addon.ui.command
declare namespace org.jboss.forge.addon.ui.result {

interface NavigationResult {

	getNext(  ):[any] /* [Lorg.jboss.forge.addon.ui.result.NavigationResultEntry; */;

} // end NavigationResult

} // end namespace org.jboss.forge.addon.ui.result
declare namespace org.jboss.forge.addon.maven.projects {

interface MavenPluginFacet/*MavenPluginFacet extends org.jboss.forge.addon.projects.ProvidedProjectFacet*/ {

	addManagedPlugin( arg0:org.jboss.forge.addon.maven.plugins.MavenPlugin ):void;
	addManagedPlugin( arg0:org.jboss.forge.addon.maven.plugins.MavenPlugin, arg1:any /* org.jboss.forge.addon.maven.profiles.Profile */ ):void;
	addPlugin( arg0:org.jboss.forge.addon.maven.plugins.MavenPlugin ):void;
	addPlugin( arg0:org.jboss.forge.addon.maven.plugins.MavenPlugin, arg1:any /* org.jboss.forge.addon.maven.profiles.Profile */ ):void;
	addPluginRepository( arg0:string, arg1:string ):void;
	addPluginRepository( arg0:string, arg1:string, arg2:any /* org.jboss.forge.addon.maven.profiles.Profile */ ):void;
	getEffectiveManagedPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate ):org.jboss.forge.addon.maven.plugins.MavenPlugin;
	getEffectiveManagedPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate, arg1:any /* org.jboss.forge.addon.maven.profiles.Profile */ ):org.jboss.forge.addon.maven.plugins.MavenPlugin;
	getEffectivePlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate ):org.jboss.forge.addon.maven.plugins.MavenPlugin;
	getEffectivePlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate, arg1:any /* org.jboss.forge.addon.maven.profiles.Profile */ ):org.jboss.forge.addon.maven.plugins.MavenPlugin;
	getFaceted(  ):any /* org.jboss.forge.addon.facets.Faceted */;
	getManagedPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate ):org.jboss.forge.addon.maven.plugins.MavenPlugin;
	getManagedPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate, arg1:any /* org.jboss.forge.addon.maven.profiles.Profile */ ):org.jboss.forge.addon.maven.plugins.MavenPlugin;
	getPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate ):org.jboss.forge.addon.maven.plugins.MavenPlugin;
	getPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate, arg1:any /* org.jboss.forge.addon.maven.profiles.Profile */ ):org.jboss.forge.addon.maven.plugins.MavenPlugin;
	getPluginRepositories(  ):java.util.List<any>;
	getPluginRepositories( arg0:any /* org.jboss.forge.addon.maven.profiles.Profile */ ):java.util.List<any>;
	hasEffectiveManagedPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate ):boolean;
	hasEffectiveManagedPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate, arg1:any /* org.jboss.forge.addon.maven.profiles.Profile */ ):boolean;
	hasEffectivePlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate ):boolean;
	hasEffectivePlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate, arg1:any /* org.jboss.forge.addon.maven.profiles.Profile */ ):boolean;
	hasManagedPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate ):boolean;
	hasManagedPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate, arg1:any /* org.jboss.forge.addon.maven.profiles.Profile */ ):boolean;
	hasPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate ):boolean;
	hasPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate, arg1:any /* org.jboss.forge.addon.maven.profiles.Profile */ ):boolean;
	hasPluginRepository( arg0:string ):boolean;
	hasPluginRepository( arg0:string, arg1:any /* org.jboss.forge.addon.maven.profiles.Profile */ ):boolean;
	install(  ):boolean;
	isInstalled(  ):boolean;
	listConfiguredEffectiveManagedPlugins(  ):java.util.List<any>;
	listConfiguredEffectiveManagedPlugins( arg0:any /* org.jboss.forge.addon.maven.profiles.Profile */ ):java.util.List<any>;
	listConfiguredEffectivePlugins(  ):java.util.List<any>;
	listConfiguredEffectivePlugins( arg0:any /* org.jboss.forge.addon.maven.profiles.Profile */ ):java.util.List<any>;
	listConfiguredManagedPlugins(  ):java.util.List<any>;
	listConfiguredManagedPlugins( arg0:any /* org.jboss.forge.addon.maven.profiles.Profile */ ):java.util.List<any>;
	listConfiguredPlugins(  ):java.util.List<any>;
	listConfiguredPlugins( arg0:any /* org.jboss.forge.addon.maven.profiles.Profile */ ):java.util.List<any>;
	merge( arg0:org.jboss.forge.addon.maven.plugins.MavenPlugin, arg1:org.jboss.forge.addon.maven.plugins.MavenPlugin ):org.jboss.forge.addon.maven.plugins.MavenPlugin;
	removeManagedPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate ):void;
	removeManagedPlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate, arg1:any /* org.jboss.forge.addon.maven.profiles.Profile */ ):void;
	removePlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate ):void;
	removePlugin( arg0:org.jboss.forge.addon.dependencies.Coordinate, arg1:any /* org.jboss.forge.addon.maven.profiles.Profile */ ):void;
	removePluginRepository( arg0:string ):org.jboss.forge.addon.dependencies.DependencyRepository;
	removePluginRepository( arg0:string, arg1:any /* org.jboss.forge.addon.maven.profiles.Profile */ ):org.jboss.forge.addon.dependencies.DependencyRepository;
	uninstall(  ):boolean;
	updateManagedPlugin( arg0:org.jboss.forge.addon.maven.plugins.MavenPlugin ):void;
	updateManagedPlugin( arg0:org.jboss.forge.addon.maven.plugins.MavenPlugin, arg1:any /* org.jboss.forge.addon.maven.profiles.Profile */ ):void;
	updatePlugin( arg0:org.jboss.forge.addon.maven.plugins.MavenPlugin ):void;
	updatePlugin( arg0:org.jboss.forge.addon.maven.plugins.MavenPlugin, arg1:any /* org.jboss.forge.addon.maven.profiles.Profile */ ):void;

} // end MavenPluginFacet

} // end namespace org.jboss.forge.addon.maven.projects
