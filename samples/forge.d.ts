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

// Nashorn
declare function print( ...args: any[]):void

type Runnable = () => void;

interface Supplier<T> {
	():T; //get():T
}

interface Consumer<T> /*extends Function*/ {
	andThen?( arg0:Consumer<T> ):Consumer<T>;
	( v:T ):void; //accept(t:T):void
}

interface ConsumerConstructor {
    new<T>( args: T): Consumer<T>;
    <T>( args: T): Consumer<T>;
    readonly prototype: Function;
}

declare const Consumer : ConsumerConstructor;

interface UnaryOperator<T>/* extends Function<T,any>*/ {

	andThen?( arg0:any /* java.util.function.Function */ ):any /* java.util.function.Function */;
	compose?( arg0:any /* java.util.function.Function */ ):any /* java.util.function.Function */;
	( v:T ):T //apply(t:T):T

}

interface UnaryOperatorConstructor {
    new<T>( args: T): UnaryOperator<T>;
    <T>( args: T): UnaryOperator<T>;
    /*static */identity<T>(  ):UnaryOperator<T>;
    readonly prototype: Function;
}

declare const UnaryOperator : UnaryOperatorConstructor;

interface Predicate<T>  {

	and?( arg0:Predicate<T> ):Predicate<T>;
	negate?():Predicate<T>;
	or?( arg0:Predicate<T> ):Predicate<T>;
	( v:T ):boolean //test( arg0:T /* java.lang.Object */ ):boolean;

}

interface PredicateConstructor {
    new<T>( args: T): UnaryOperator<T>;
    <T>( args: T): UnaryOperator<T>;

	/*static*/ isEqual<T>( arg0:any /* java.lang.Object */ ):Predicate<T>;

}

declare const Predicate : PredicateConstructor;

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

declare namespace java.util.stream {

	interface StreamConstructor{
		builder<T>(  ):Stream.Builder<T>;
		concat<T>( arg0:Stream<T>,arg1:Stream<T> ):Stream<T>;
		empty<T>(  ):Stream<T>;
		generate<T>( arg0:Supplier<T> ):Stream<T>;
		iterate<T>( seed:T,arg1:UnaryOperator<T> ):Stream<T>;
		of<T>( arg0:Array<T> ):Stream<T>;
		of<T>( arg0:T ):Stream<T>;

	}

	export const Stream : java.util.stream.StreamConstructor;
}
declare namespace org.jboss.forge.addon.dependencies {

interface Dependency {

	artifact?:any /* org.jboss.forge.addon.resource.FileResource */;
	coordinate?:Coordinate;
	excludedCoordinates?:java.util.List<org.jboss.forge.addon.dependencies.Coordinate>;
	optional?:boolean;
	scopeType?:string;

} // end Dependency

} // end namespace org.jboss.forge.addon.dependencies
declare namespace org.jboss.forge.addon.dependencies {

class DependencyRepository/* extends java.lang.Object*/ {

	id:string;
	url:string;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	hashCode(  ):int;
	toString(  ):string;

} // end DependencyRepository

} // end namespace org.jboss.forge.addon.dependencies
declare namespace org.jboss.forge.addon.dependencies {

interface Coordinate {

	artifactId?:string;
	classifier?:string;
	groupId?:string;
	packaging?:string;
	snapshot?:boolean;
	systemPath?:string;
	version?:string;

} // end Coordinate

} // end namespace org.jboss.forge.addon.dependencies
declare namespace org.jboss.forge.addon.dependencies.builder {

class DependencyBuilder/* extends java.lang.ObjectDependencyBuilder implements org.jboss.forge.addon.dependencies.Dependency*/ {

	artifact:any /* org.jboss.forge.addon.resource.FileResource */;
	coordinate:CoordinateBuilder;
	excludedCoordinates:java.util.List<org.jboss.forge.addon.dependencies.Coordinate>;
	groupId:string;
	optional:boolean;
	scopeType:string;
	addExclusion( arg0:org.jboss.forge.addon.dependencies.Coordinate ):DependencyBuilder;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	hashCode(  ):int;
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
	static create(  ):DependencyBuilder;
	static create( arg0:org.jboss.forge.addon.dependencies.Dependency ):DependencyBuilder;
	static create( arg0:string ):DependencyBuilder;
	toString(  ):string;

} // end DependencyBuilder

} // end namespace org.jboss.forge.addon.dependencies.builder
declare namespace org.jboss.forge.addon.dependencies.builder {

class CoordinateBuilder/* extends java.lang.ObjectCoordinateBuilder implements org.jboss.forge.addon.dependencies.Coordinate*/ {

	artifactId:string;
	classifier:string;
	groupId:string;
	packaging:string;
	snapshot:boolean;
	systemPath:string;
	version:string;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	hashCode(  ):int;
	setArtifactId( arg0:string ):CoordinateBuilder;
	setClassifier( arg0:string ):CoordinateBuilder;
	setGroupId( arg0:string ):CoordinateBuilder;
	setPackaging( arg0:string ):CoordinateBuilder;
	setSystemPath( arg0:string ):CoordinateBuilder;
	setVersion( arg0:string ):CoordinateBuilder;
	static create(  ):CoordinateBuilder;
	static create( arg0:java.util.Map<any, any> ):CoordinateBuilder;
	static create( arg0:org.jboss.forge.addon.dependencies.Coordinate ):CoordinateBuilder;
	static create( arg0:string ):CoordinateBuilder;
	toString(  ):string;

} // end CoordinateBuilder

} // end namespace org.jboss.forge.addon.dependencies.builder
declare namespace org.jboss.forge.addon.dependencies.builder {

class DependencyQueryBuilder/* extends java.lang.ObjectDependencyQueryBuilder implements org.jboss.forge.addon.dependencies.DependencyQuery*/ {

	coordinate:org.jboss.forge.addon.dependencies.Coordinate;
	dependencyFilter:org.jboss.forge.furnace.util.Predicate<org.jboss.forge.addon.dependencies.Dependency>;
	dependencyRepositories:java.util.List<org.jboss.forge.addon.dependencies.DependencyRepository>;
	scopeType:string;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	hashCode(  ):int;
	setCoordinate( arg0:org.jboss.forge.addon.dependencies.Coordinate ):void;
	setFilter( arg0:any /* org.jboss.forge.furnace.util.Predicate */ ):DependencyQueryBuilder;
	setRepositories( arg0:[any] /* [Lorg.jboss.forge.addon.dependencies.DependencyRepository; */ ):DependencyQueryBuilder;
	setRepositories( arg0:any /* java.lang.Iterable */ ):DependencyQueryBuilder;
	setScopeType( arg0:string ):DependencyQueryBuilder;
	static create( arg0:any /* org.jboss.forge.addon.dependencies.DependencyQuery */ ):DependencyQueryBuilder;
	static create( arg0:org.jboss.forge.addon.dependencies.Coordinate ):DependencyQueryBuilder;
	static create( arg0:string ):DependencyQueryBuilder;
	toString(  ):string;

} // end DependencyQueryBuilder

} // end namespace org.jboss.forge.addon.dependencies.builder
declare namespace org.jboss.forge.addon.maven.dependencies {

class MavenDependencyAdapter/* extends org.apache.maven.model.DependencyMavenDependencyAdapter implements org.jboss.forge.addon.dependencies.Dependency*/ {

	artifact:any /* org.jboss.forge.addon.resource.FileResource */;
	artifactId:string;
	classifier:string;
	coordinate:org.jboss.forge.addon.dependencies.Coordinate;
	excludedCoordinates:java.util.List<org.jboss.forge.addon.dependencies.Coordinate>;
	exclusions:java.util.List<org.apache.maven.model.Exclusion>;
	groupId:string;
	managementKey:string;
	optional:boolean;
	scope:string;
	scopeType:string;
	systemPath:string;
	type:string;
	version:string;
	addExclusion( arg0:org.apache.maven.model.Exclusion ):void;
	clone(  ):org.apache.maven.model.Dependency;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	getLocation( arg0:any /* java.lang.Object */ ):any /* org.apache.maven.model.InputLocation */;
	getOptional(  ):string;
	hashCode(  ):int;
	removeExclusion( arg0:org.apache.maven.model.Exclusion ):void;
	setExclusions( arg0:java.util.Collection<any> ):void;
	setLocation( arg0:any /* java.lang.Object */, arg1:any /* org.apache.maven.model.InputLocation */ ):void;
	setOptional( arg0:string ):void;
	static fromAetherList<E>( arg0:java.util.List<any> ):java.util.List<any>;
	static fromMavenList<E>( arg0:java.util.List<any> ):java.util.List<any>;
	static toMavenList<E>( arg0:java.util.List<any> ):java.util.List<any>;
	toString(  ):string;

} // end MavenDependencyAdapter

} // end namespace org.jboss.forge.addon.maven.dependencies
declare namespace org.jboss.forge.addon.maven.plugins {

interface PluginElement {


} // end PluginElement

} // end namespace org.jboss.forge.addon.maven.plugins
declare namespace org.jboss.forge.addon.maven.plugins {

interface Execution {

	config?:Configuration;
	goals?:java.util.List<java.lang.String>;
	id?:string;
	phase?:string;

} // end Execution

} // end namespace org.jboss.forge.addon.maven.plugins
declare namespace org.jboss.forge.addon.maven.plugins {

interface ConfigurationElement/*ConfigurationElement extends PluginElement*/ {

	attributes?:java.util.Map<java.lang.String, java.lang.String>;
	children?:java.util.List<org.jboss.forge.addon.maven.plugins.PluginElement>;
	name?:string;
	plugin?:boolean;
	text?:string;
	getChildByContent( arg0:string ):ConfigurationElement;
	getChildByContent( arg0:string, arg1:boolean ):ConfigurationElement;
	getChildByName( arg0:string ):ConfigurationElement;
	getChildByName( arg0:string, arg1:boolean ):ConfigurationElement;
	hasChildByContent( arg0:string ):boolean;
	hasChildByContent( arg0:string, arg1:boolean ):boolean;
	hasChildByName( arg0:string ):boolean;
	hasChildByName( arg0:string, arg1:boolean ):boolean;
	hasChildren(  ):boolean;

} // end ConfigurationElement

} // end namespace org.jboss.forge.addon.maven.plugins
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
declare namespace org.jboss.forge.addon.maven.plugins {

class ConfigurationBuilder/* extends java.lang.ObjectConfigurationBuilder implements Configuration*/ {

	origin:MavenPluginBuilder;
	addConfigurationElement( arg0:ConfigurationElement ):Configuration;
	createConfigurationElement( arg0:string ):ConfigurationElementBuilder;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	getConfigurationElement( arg0:string ):ConfigurationElement;
	hasConfigurationElement( arg0:string ):boolean;
	hasConfigurationElements(  ):boolean;
	hashCode(  ):int;
	listConfigurationElements(  ):java.util.List<any>;
	removeConfigurationElement( arg0:string ):void;
	static create(  ):ConfigurationBuilder;
	static create( arg0:Configuration, arg1:MavenPluginBuilder ):ConfigurationBuilder;
	static create( arg0:MavenPluginBuilder ):ConfigurationBuilder;
	toString(  ):string;

} // end ConfigurationBuilder

} // end namespace org.jboss.forge.addon.maven.plugins
declare namespace org.jboss.forge.addon.maven.plugins {

class ConfigurationElementBuilder/* extends java.lang.ObjectConfigurationElementBuilder implements ConfigurationElement*/ {

	attributes:java.util.Map<java.lang.String, java.lang.String>;
	children:java.util.List<org.jboss.forge.addon.maven.plugins.PluginElement>;
	name:string;
	parentElement:ConfigurationElementBuilder;
	parentPluginConfig:ConfigurationBuilder;
	plugin:boolean;
	text:string;
	addAttribute( arg0:string, arg1:string ):ConfigurationElementBuilder;
	addChild( arg0:PluginElement ):ConfigurationElementBuilder;
	addChild( arg0:string ):ConfigurationElementBuilder;
	createConfigurationElement( arg0:string ):ConfigurationElementBuilder;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	getChildByContent( arg0:string ):ConfigurationElement;
	getChildByContent( arg0:string, arg1:boolean ):ConfigurationElement;
	getChildByName( arg0:string ):ConfigurationElement;
	getChildByName( arg0:string, arg1:boolean ):ConfigurationElement;
	hasChildByContent( arg0:string ):boolean;
	hasChildByContent( arg0:string, arg1:boolean ):boolean;
	hasChildByName( arg0:string ):boolean;
	hasChildByName( arg0:string, arg1:boolean ):boolean;
	hasChildren(  ):boolean;
	hashCode(  ):int;
	removeAttribute( arg0:string ):ConfigurationElementBuilder;
	setName( arg0:string ):ConfigurationElementBuilder;
	setText( arg0:string ):ConfigurationElementBuilder;
	static create(  ):ConfigurationElementBuilder;
	static create( arg0:ConfigurationBuilder ):ConfigurationElementBuilder;
	static create( arg0:ConfigurationElementBuilder ):ConfigurationElementBuilder;
	static createFromExisting( arg0:ConfigurationElement ):ConfigurationElementBuilder;
	toString(  ):string;

} // end ConfigurationElementBuilder

} // end namespace org.jboss.forge.addon.maven.plugins
declare namespace org.jboss.forge.addon.maven.plugins {

class ExecutionBuilder/* extends java.lang.ObjectExecutionBuilder implements Execution*/ {

	config:Configuration;
	goals:java.util.List<java.lang.String>;
	id:string;
	phase:string;
	addGoal( arg0:string ):ExecutionBuilder;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	hashCode(  ):int;
	setConfig( arg0:Configuration ):ExecutionBuilder;
	setId( arg0:string ):ExecutionBuilder;
	setPhase( arg0:string ):ExecutionBuilder;
	static create(  ):ExecutionBuilder;
	static create( arg0:any /* org.jboss.forge.addon.maven.plugins.ExecutionImpl */ ):ExecutionBuilder;
	toString(  ):string;

} // end ExecutionBuilder

} // end namespace org.jboss.forge.addon.maven.plugins
declare namespace org.jboss.forge.addon.maven.plugins {

class MavenPluginBuilder/* extends java.lang.ObjectMavenPluginBuilder implements MavenPlugin, PluginElement*/ {

	config:Configuration;
	coordinate:org.jboss.forge.addon.dependencies.Coordinate;
	directDependencies:java.util.List<org.jboss.forge.addon.dependencies.Dependency>;
	extensionsEnabled:boolean;
	addExecution( arg0:Execution ):MavenPluginBuilder;
	addPluginDependency( arg0:org.jboss.forge.addon.dependencies.Dependency ):MavenPluginBuilder;
	createConfiguration(  ):ConfigurationBuilder;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	hashCode(  ):int;
	listExecutions(  ):java.util.List<any>;
	setConfiguration( arg0:Configuration ):MavenPluginBuilder;
	setCoordinate( arg0:org.jboss.forge.addon.dependencies.Coordinate ):MavenPluginBuilder;
	setExtensions( arg0:boolean ):MavenPluginBuilder;
	static create(  ):MavenPluginBuilder;
	static create( arg0:any /* org.jboss.forge.addon.maven.plugins.MavenPlugin */ ):MavenPluginBuilder;
	toString(  ):string;

} // end MavenPluginBuilder

} // end namespace org.jboss.forge.addon.maven.plugins
declare namespace org.jboss.forge.addon.ui.context {

interface UIContext/*UIContext extends java.lang.AutoCloseable*/ {

	attributeMap?:java.util.Map<java.lang.Object, java.lang.Object>;
	initialSelection?:any /* org.jboss.forge.addon.ui.context.UISelection */;
	listeners?:java.util.Set<org.jboss.forge.addon.ui.command.CommandExecutionListener>;
	provider?:any /* org.jboss.forge.addon.ui.UIProvider */;
	selection?:any /* org.jboss.forge.addon.ui.context.UISelection */;
	addCommandExecutionListener( arg0:org.jboss.forge.addon.ui.command.CommandExecutionListener ):any /* org.jboss.forge.furnace.spi.ListenerRegistration */;
	close(  ):void;
	setSelection( arg0:any /* java.lang.Object */ ):void;

} // end UIContext

} // end namespace org.jboss.forge.addon.ui.context
declare namespace org.jboss.forge.addon.ui.context {

interface UIValidationContext/*UIValidationContext extends UIContextProvider*/ {

	currentInputComponent?:any /* org.jboss.forge.addon.ui.input.InputComponent */;
	messages?:java.util.List<org.jboss.forge.addon.ui.output.UIMessage>;
	addValidationError( arg0:any /* org.jboss.forge.addon.ui.input.InputComponent */, arg1:string ):void;
	addValidationInformation( arg0:any /* org.jboss.forge.addon.ui.input.InputComponent */, arg1:string ):void;
	addValidationWarning( arg0:any /* org.jboss.forge.addon.ui.input.InputComponent */, arg1:string ):void;
	getUIContext(  ):UIContext;

} // end UIValidationContext

} // end namespace org.jboss.forge.addon.ui.context
declare namespace org.jboss.forge.addon.ui.context {

interface UIBuilder/*UIBuilder extends UIContextProvider*/ {

	inputComponentFactory?:org.jboss.forge.addon.ui.input.InputComponentFactory;
	add( arg0:any /* org.jboss.forge.addon.ui.input.InputComponent */ ):UIBuilder;
	getUIContext(  ):UIContext;

} // end UIBuilder

} // end namespace org.jboss.forge.addon.ui.context
declare namespace org.jboss.forge.addon.ui.context {

interface UIContextProvider {

	UIContext?:UIContext;

} // end UIContextProvider

} // end namespace org.jboss.forge.addon.ui.context
declare namespace org.jboss.forge.addon.ui.context {

interface UIExecutionContext/*UIExecutionContext extends UIContextProvider*/ {

	progressMonitor?:any /* org.jboss.forge.addon.ui.progress.UIProgressMonitor */;
	prompt?:any /* org.jboss.forge.addon.ui.input.UIPrompt */;
	getUIContext(  ):UIContext;

} // end UIExecutionContext

} // end namespace org.jboss.forge.addon.ui.context
declare namespace org.jboss.forge.addon.ui.context {

interface UINavigationContext/*UINavigationContext extends UIContextProvider*/ {

	currentCommand?:org.jboss.forge.addon.ui.command.UICommand;
	initialCommand?:org.jboss.forge.addon.ui.command.UICommand;
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
declare namespace org.jboss.forge.addon.ui.command {

interface CommandExecutionListener {

	postCommandExecuted( arg0:UICommand, arg1:org.jboss.forge.addon.ui.context.UIExecutionContext, arg2:org.jboss.forge.addon.ui.result.Result ):void;
	postCommandFailure( arg0:UICommand, arg1:org.jboss.forge.addon.ui.context.UIExecutionContext, arg2:any /* java.lang.Throwable */ ):void;
	preCommandExecuted( arg0:UICommand, arg1:org.jboss.forge.addon.ui.context.UIExecutionContext ):void;

} // end CommandExecutionListener

} // end namespace org.jboss.forge.addon.ui.command
declare namespace org.jboss.forge.addon.ui.result {

interface Result {

	message?:string;

} // end Result

} // end namespace org.jboss.forge.addon.ui.result
declare namespace org.jboss.forge.addon.ui.result {

class Results/* extends java.lang.Object*/ {

	equals( arg0:any /* java.lang.Object */ ):boolean;
	hashCode(  ):int;
	static aggregate( arg0:any /* java.lang.Iterable */ ):any /* org.jboss.forge.addon.ui.result.CompositeResult */;
	static fail(  ):Result;
	static fail( arg0:string ):Result;
	static fail( arg0:string, arg1:any /* java.lang.Throwable */ ):Result;
	static navigateTo( arg0:[any] /* [Ljava.lang.Class; */ ):NavigationResult;
	static navigateTo( arg0:java.lang.Class<any> ):NavigationResult;
	static navigateTo( arg0:java.lang.Class<any>, arg1:[any] /* [Ljava.lang.Class; */ ):NavigationResult;
	static navigationBuilder(  ):any /* org.jboss.forge.addon.ui.result.navigation.NavigationResultBuilder */;
	static success(  ):Result;
	static success( arg0:string ):Result;
	static toList<E>( arg0:any /* java.lang.Iterable */ ):java.util.List<any>;
	toString(  ):string;

} // end Results

} // end namespace org.jboss.forge.addon.ui.result
declare namespace org.jboss.forge.addon.ui.result {

interface NavigationResult {

	next?:[any] /* [Lorg.jboss.forge.addon.ui.result.NavigationResultEntry; */;

} // end NavigationResult

} // end namespace org.jboss.forge.addon.ui.result
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
declare namespace org.jboss.forge.addon.ui.input {

interface UIInput<VALUETYPE>/*UIInput<VALUETYPE> extends InputComponent<any, VALUETYPE>, SingleValued<any, VALUETYPE>, HasCompleter<any, VALUETYPE>*/ {

	addValidator( arg0:any /* org.jboss.forge.addon.ui.validate.UIValidator */ ):any /* java.lang.Object */;
	addValueChangeListener( arg0:any /* org.jboss.forge.addon.ui.input.ValueChangeListener */ ):any /* org.jboss.forge.furnace.spi.ListenerRegistration */;
	getCompleter(  ):any /* org.jboss.forge.addon.ui.input.UICompleter */;
	getDeprecatedMessage(  ):string;
	getDescription(  ):string;
	getFacet( arg0:java.lang.Class<VALUETYPE> ):any /* org.jboss.forge.addon.facets.Facet */;
	getFacetAsOptional( arg0:java.lang.Class<VALUETYPE> ):java.util.Optional<VALUETYPE>;
	getFacets(  ):any /* java.lang.Iterable */;
	getFacets( arg0:java.lang.Class<VALUETYPE> ):any /* java.lang.Iterable */;
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
	hasAllFacets( arg0:any /* java.lang.Iterable */ ):boolean;
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
declare namespace org.jboss.forge.addon.ui.input {

interface UIInputMany<VALUETYPE>/*UIInputMany<VALUETYPE> extends InputComponent<any, VALUETYPE>, ManyValued<any, VALUETYPE>, HasCompleter<any, VALUETYPE>*/ {

	addValidator( arg0:any /* org.jboss.forge.addon.ui.validate.UIValidator */ ):any /* java.lang.Object */;
	addValueChangeListener( arg0:any /* org.jboss.forge.addon.ui.input.ValueChangeListener */ ):any /* org.jboss.forge.furnace.spi.ListenerRegistration */;
	getCompleter(  ):any /* org.jboss.forge.addon.ui.input.UICompleter */;
	getDeprecatedMessage(  ):string;
	getDescription(  ):string;
	getFacet( arg0:java.lang.Class<VALUETYPE> ):any /* org.jboss.forge.addon.facets.Facet */;
	getFacetAsOptional( arg0:java.lang.Class<VALUETYPE> ):java.util.Optional<VALUETYPE>;
	getFacets(  ):any /* java.lang.Iterable */;
	getFacets( arg0:java.lang.Class<VALUETYPE> ):any /* java.lang.Iterable */;
	getLabel(  ):string;
	getName(  ):string;
	getNote(  ):string;
	getRequiredMessage(  ):string;
	getShortName(  ):any /* char */;
	getValidators(  ):java.util.Set<VALUETYPE>;
	getValue(  ):any /* java.lang.Iterable */;
	getValue(  ):any /* java.lang.Object */;
	getValueConverter(  ):any /* org.jboss.forge.addon.convert.Converter */;
	getValueType(  ):java.lang.Class<VALUETYPE>;
	hasAllFacets( arg0:[any] /* [Ljava.lang.Class; */ ):boolean;
	hasAllFacets( arg0:any /* java.lang.Iterable */ ):boolean;
	hasDefaultValue(  ):boolean;
	hasFacet( arg0:java.lang.Class<VALUETYPE> ):boolean;
	hasValue(  ):boolean;
	install( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	isDeprecated(  ):boolean;
	isEnabled(  ):boolean;
	isRequired(  ):boolean;
	register( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	setCompleter( arg0:any /* org.jboss.forge.addon.ui.input.UICompleter */ ):any /* java.lang.Object */;
	setDefaultValue( arg0:any /* java.lang.Iterable */ ):any /* java.lang.Object */;
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
	setValue( arg0:any /* java.lang.Iterable */ ):any /* java.lang.Object */;
	setValueConverter( arg0:any /* org.jboss.forge.addon.convert.Converter */ ):any /* java.lang.Object */;
	supports( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	uninstall( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	unregister( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	validate( arg0:org.jboss.forge.addon.ui.context.UIValidationContext ):void;

} // end UIInputMany<VALUETYPE>

} // end namespace org.jboss.forge.addon.ui.input
declare namespace org.jboss.forge.addon.ui.input {

interface UISelectMany<VALUETYPE>/*UISelectMany<VALUETYPE> extends SelectComponent<any, VALUETYPE>, ManyValued<any, VALUETYPE>*/ {

	selectedIndexes?:[any] /* [I */;
	addValidator( arg0:any /* org.jboss.forge.addon.ui.validate.UIValidator */ ):any /* java.lang.Object */;
	addValueChangeListener( arg0:any /* org.jboss.forge.addon.ui.input.ValueChangeListener */ ):any /* org.jboss.forge.furnace.spi.ListenerRegistration */;
	getDeprecatedMessage(  ):string;
	getDescription(  ):string;
	getFacet( arg0:java.lang.Class<VALUETYPE> ):any /* org.jboss.forge.addon.facets.Facet */;
	getFacetAsOptional( arg0:java.lang.Class<VALUETYPE> ):java.util.Optional<VALUETYPE>;
	getFacets(  ):any /* java.lang.Iterable */;
	getFacets( arg0:java.lang.Class<VALUETYPE> ):any /* java.lang.Iterable */;
	getItemLabelConverter(  ):any /* org.jboss.forge.addon.convert.Converter */;
	getLabel(  ):string;
	getName(  ):string;
	getNote(  ):string;
	getRequiredMessage(  ):string;
	getShortName(  ):any /* char */;
	getValidators(  ):java.util.Set<VALUETYPE>;
	getValue(  ):any /* java.lang.Iterable */;
	getValue(  ):any /* java.lang.Object */;
	getValueChoices(  ):any /* java.lang.Iterable */;
	getValueConverter(  ):any /* org.jboss.forge.addon.convert.Converter */;
	getValueType(  ):java.lang.Class<VALUETYPE>;
	hasAllFacets( arg0:[any] /* [Ljava.lang.Class; */ ):boolean;
	hasAllFacets( arg0:any /* java.lang.Iterable */ ):boolean;
	hasDefaultValue(  ):boolean;
	hasFacet( arg0:java.lang.Class<VALUETYPE> ):boolean;
	hasValue(  ):boolean;
	install( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	isDeprecated(  ):boolean;
	isEnabled(  ):boolean;
	isRequired(  ):boolean;
	register( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	setDefaultValue( arg0:any /* java.lang.Iterable */ ):any /* java.lang.Object */;
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
	setValue( arg0:any /* java.lang.Iterable */ ):any /* java.lang.Object */;
	setValueChoices( arg0:any /* java.lang.Iterable */ ):any /* java.lang.Object */;
	setValueChoices( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setValueConverter( arg0:any /* org.jboss.forge.addon.convert.Converter */ ):any /* java.lang.Object */;
	supports( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	uninstall( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	unregister( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	validate( arg0:org.jboss.forge.addon.ui.context.UIValidationContext ):void;

} // end UISelectMany<VALUETYPE>

} // end namespace org.jboss.forge.addon.ui.input
declare namespace org.jboss.forge.addon.ui.input {

interface UISelectOne<VALUETYPE>/*UISelectOne<VALUETYPE> extends SelectComponent<any, VALUETYPE>, SingleValued<any, VALUETYPE>*/ {

	selectedIndex?:int;
	addValidator( arg0:any /* org.jboss.forge.addon.ui.validate.UIValidator */ ):any /* java.lang.Object */;
	addValueChangeListener( arg0:any /* org.jboss.forge.addon.ui.input.ValueChangeListener */ ):any /* org.jboss.forge.furnace.spi.ListenerRegistration */;
	getDeprecatedMessage(  ):string;
	getDescription(  ):string;
	getFacet( arg0:java.lang.Class<VALUETYPE> ):any /* org.jboss.forge.addon.facets.Facet */;
	getFacetAsOptional( arg0:java.lang.Class<VALUETYPE> ):java.util.Optional<VALUETYPE>;
	getFacets(  ):any /* java.lang.Iterable */;
	getFacets( arg0:java.lang.Class<VALUETYPE> ):any /* java.lang.Iterable */;
	getItemLabelConverter(  ):any /* org.jboss.forge.addon.convert.Converter */;
	getLabel(  ):string;
	getName(  ):string;
	getNote(  ):string;
	getRequiredMessage(  ):string;
	getShortName(  ):any /* char */;
	getValidators(  ):java.util.Set<VALUETYPE>;
	getValue(  ):any /* java.lang.Object */;
	getValue(  ):any /* java.lang.Object */;
	getValueChoices(  ):any /* java.lang.Iterable */;
	getValueConverter(  ):any /* org.jboss.forge.addon.convert.Converter */;
	getValueType(  ):java.lang.Class<VALUETYPE>;
	hasAllFacets( arg0:[any] /* [Ljava.lang.Class; */ ):boolean;
	hasAllFacets( arg0:any /* java.lang.Iterable */ ):boolean;
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
	setValueChoices( arg0:any /* java.lang.Iterable */ ):any /* java.lang.Object */;
	setValueChoices( arg0:any /* java.util.concurrent.Callable */ ):any /* java.lang.Object */;
	setValueConverter( arg0:any /* org.jboss.forge.addon.convert.Converter */ ):any /* java.lang.Object */;
	supports( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	uninstall( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	unregister( arg0:any /* org.jboss.forge.addon.facets.Facet */ ):boolean;
	validate( arg0:org.jboss.forge.addon.ui.context.UIValidationContext ):void;

} // end UISelectOne<VALUETYPE>

} // end namespace org.jboss.forge.addon.ui.input
declare namespace org.jboss.forge.addon.ui.output {

interface UIMessage {

	description?:string;
	severity?:any /* org.jboss.forge.addon.ui.output.UIMessage$Severity */;
	source?:any /* org.jboss.forge.addon.ui.input.InputComponent */;

} // end UIMessage
export module UIMessage {

/* enum */class Severity/* extends java.lang.Enum<any>*/ {

	static ERROR:Severity;
	static WARN:Severity;
	static INFO:Severity;

	declaringClass:java.lang.Class<any>;
	compareTo( arg0:any /* java.lang.Enum */ ):int;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	hashCode(  ):int;
	name(  ):string;
	ordinal(  ):int;
	static valueOf( arg0:string ):any /* org.jboss.forge.addon.ui.output.UIMessage$Severity */;
	static valueOf<E>( arg0:java.lang.Class<any>, arg1:string ):any /* java.lang.Enum */;
	static values(  ):[any] /* [Lorg.jboss.forge.addon.ui.output.UIMessage$Severity; */;
	toString(  ):string;

} // end Severity

} // end module UIMessage

} // end namespace org.jboss.forge.addon.ui.output
declare namespace org.jboss.forge.addon.ui.metadata {

interface UICommandMetadata {

	category?:any /* org.jboss.forge.addon.ui.metadata.UICategory */;
	deprecated?:boolean;
	deprecatedMessage?:string;
	description?:string;
	docLocation?:any /* java.net.URL */;
	longDescription?:string;
	name?:string;
	type?:java.lang.Class<any>;

} // end UICommandMetadata

} // end namespace org.jboss.forge.addon.ui.metadata
declare namespace org.apache.maven.model {

class Dependency/* extends java.lang.ObjectDependency implements java.io.Serializable, java.lang.Cloneable, InputLocationTracker*/ {

	artifactId:string;
	classifier:string;
	exclusions:java.util.List<org.apache.maven.model.Exclusion>;
	groupId:string;
	managementKey:string;
	optional:boolean;
	scope:string;
	systemPath:string;
	type:string;
	version:string;
	addExclusion( arg0:Exclusion ):void;
	clone(  ):Dependency;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	getLocation( arg0:any /* java.lang.Object */ ):any /* org.apache.maven.model.InputLocation */;
	getOptional(  ):string;
	hashCode(  ):int;
	removeExclusion( arg0:Exclusion ):void;
	setLocation( arg0:any /* java.lang.Object */, arg1:any /* org.apache.maven.model.InputLocation */ ):void;
	setOptional( arg0:string ):void;
	toString(  ):string;

} // end Dependency

} // end namespace org.apache.maven.model
declare namespace org.apache.maven.model {

class Exclusion/* extends java.lang.ObjectExclusion implements java.io.Serializable, java.lang.Cloneable, InputLocationTracker*/ {

	artifactId:string;
	groupId:string;
	clone(  ):Exclusion;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	getLocation( arg0:any /* java.lang.Object */ ):any /* org.apache.maven.model.InputLocation */;
	hashCode(  ):int;
	setLocation( arg0:any /* java.lang.Object */, arg1:any /* org.apache.maven.model.InputLocation */ ):void;
	toString(  ):string;

} // end Exclusion

} // end namespace org.apache.maven.model
declare namespace java.lang {

class String/* extends ObjectString implements java.io.Serializable, Comparable<any>, CharSequence*/ {

	bytes:bytearray;
	empty:boolean;
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
	getBytes( arg0:any /* java.nio.charset.Charset */ ):bytearray;
	getBytes( arg0:int, arg1:int, arg2:bytearray, arg3:int ):void;
	getBytes( arg0:string ):bytearray;
	getChars( arg0:chararray, arg1:int ):void;
	getChars( arg0:int, arg1:int, arg2:chararray, arg3:int ):void;
	hashCode(  ):int;
	indexOf( arg0:int ):int;
	indexOf( arg0:int, arg1:int ):int;
	indexOf( arg0:string ):int;
	indexOf( arg0:string, arg1:int ):int;
	indexOfSupplementary( arg0:int, arg1:int ):int;
	intern(  ):string;
	lastIndexOf( arg0:int ):int;
	lastIndexOf( arg0:int, arg1:int ):int;
	lastIndexOf( arg0:string ):int;
	lastIndexOf( arg0:string, arg1:int ):int;
	lastIndexOfSupplementary( arg0:int, arg1:int ):int;
	length(  ):int;
	matches( arg0:string ):boolean;
	nonSyncContentEquals( arg0:any /* java.lang.AbstractStringBuilder */ ):boolean;
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
	static checkBounds( arg0:bytearray, arg1:int, arg2:int ):void;
	static copyValueOf( arg0:chararray ):string;
	static copyValueOf( arg0:chararray, arg1:int, arg2:int ):string;
	static format( arg0:any /* java.util.Locale */, arg1:string, arg2:[any] /* [Ljava.lang.Object; */ ):string;
	static format( arg0:string, arg1:[any] /* [Ljava.lang.Object; */ ):string;
	static indexOf( arg0:chararray, arg1:int, arg2:int, arg3:chararray, arg4:int, arg5:int, arg6:int ):int;
	static indexOf( arg0:chararray, arg1:int, arg2:int, arg3:string, arg4:int ):int;
	static join( arg0:any /* java.lang.CharSequence */, arg1:[any] /* [Ljava.lang.CharSequence; */ ):string;
	static join( arg0:any /* java.lang.CharSequence */, arg1:any /* java.lang.Iterable */ ):string;
	static lastIndexOf( arg0:chararray, arg1:int, arg2:int, arg3:chararray, arg4:int, arg5:int, arg6:int ):int;
	static lastIndexOf( arg0:chararray, arg1:int, arg2:int, arg3:string, arg4:int ):int;
	static valueOf( arg0:any /* char */ ):string;
	static valueOf( arg0:any /* java.lang.Object */ ):string;
	static valueOf( arg0:boolean ):string;
	static valueOf( arg0:chararray ):string;
	static valueOf( arg0:chararray, arg1:int, arg2:int ):string;
	static valueOf( arg0:double ):string;
	static valueOf( arg0:float ):string;
	static valueOf( arg0:int ):string;
	static valueOf( arg0:long ):string;
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
declare namespace java.util {

interface Collection<E>/*Collection<E> extends java.lang.Iterable<E>*/ {

	empty?:boolean;
	add( arg0:any /* java.lang.Object */ ):boolean;
	addAll( arg0:Collection<E> ):boolean;
	clear(  ):void;
	contains( arg0:any /* java.lang.Object */ ):boolean;
	containsAll( arg0:Collection<E> ):boolean;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	forEach( arg0:Consumer<E> ):void;
	hashCode(  ):int;
	iterator(  ):any /* java.util.Iterator */;
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
declare namespace java.util {

interface List<E>/*List<E> extends Collection<E>*/ {

	empty?:boolean;
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
	hashCode(  ):int;
	indexOf( arg0:any /* java.lang.Object */ ):int;
	iterator(  ):any /* java.util.Iterator */;
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
declare namespace java.util {

interface Set<E>/*Set<E> extends Collection<E>*/ {

	empty?:boolean;
	add( arg0:any /* java.lang.Object */ ):boolean;
	addAll( arg0:Collection<E> ):boolean;
	clear(  ):void;
	contains( arg0:any /* java.lang.Object */ ):boolean;
	containsAll( arg0:Collection<E> ):boolean;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	forEach( arg0:Consumer<E> ):void;
	hashCode(  ):int;
	iterator(  ):any /* java.util.Iterator */;
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

interface Map<K, V> {

	empty?:boolean;
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
	hashCode(  ):int;
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

	key?:any /* java.lang.Object */;
	value?:any /* java.lang.Object */;
	// static comparingByKey<T>(  ):any /* java.util.Comparator */;
	// static comparingByKey<T>( arg0:any /* java.util.Comparator */ ):any /* java.util.Comparator */;
	// static comparingByValue<T>(  ):any /* java.util.Comparator */;
	// static comparingByValue<T>( arg0:any /* java.util.Comparator */ ):any /* java.util.Comparator */;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	hashCode(  ):int;
	setValue( arg0:any /* java.lang.Object */ ):any /* java.lang.Object */;

} // end Entry<K, V>

} // end module Map

} // end namespace java.util
declare namespace java.util.stream {

interface Stream<T>/*Stream<T> extends BaseStream<T, any>*/ {

	// static builder<T>(  ):any /* java.util.stream.Stream$Builder */;
	// static concat<T>( arg0:Stream<T>, arg1:Stream<T> ):Stream<T>;
	// static empty<T>(  ):Stream<T>;
	// static generate<T>( arg0:Supplier<T> ):Stream<T>;
	// static iterate<T>( arg0:any /* java.lang.Object */, arg1:UnaryOperator<T> ):Stream<T>;
	// static of<T>( arg0:[any] /* [Ljava.lang.Object; */ ):Stream<T>;
	// static of<T>( arg0:any /* java.lang.Object */ ):Stream<T>;
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
	iterator(  ):any /* java.util.Iterator */;
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
declare namespace java.util {

class Optional<T>/* extends java.lang.Object*/ {

	present:boolean;
	equals( arg0:any /* java.lang.Object */ ):boolean;
	filter( arg0:Predicate<T> ):Optional<T>;
	flatMap( arg0:any /* java.util.function.Function */ ):Optional<T>;
	get(  ):any /* java.lang.Object */;
	hashCode(  ):int;
	ifPresent( arg0:Consumer<T> ):void;
	map( arg0:any /* java.util.function.Function */ ):Optional<T>;
	orElse( arg0:any /* java.lang.Object */ ):any /* java.lang.Object */;
	orElseGet( arg0:Supplier<T> ):any /* java.lang.Object */;
	orElseThrow( arg0:Supplier<T> ):any /* java.lang.Object */;
	static empty<T>(  ):Optional<T>;
	static of<T>( arg0:any /* java.lang.Object */ ):Optional<T>;
	static ofNullable<T>( arg0:any /* java.lang.Object */ ):Optional<T>;
	toString(  ):string;

} // end Optional<T>

} // end namespace java.util
