// ==> TAGGED INTERFACE
declare namespace java.lang {
	interface Iterable<E> {}

	class System {
		static getProperty( key:string):string;
	}
}

declare namespace org.apache.maven.model {

interface  InputLocationTracker {}
}
// <== TAGGED INTERFACE

// ==> GLOBAL METHOD
declare function print( ...args: any[] );

declare function require( module:string );
// <== GLOBAL METHOD

declare namespace org.jboss.forge.addon.maven.plugins {

interface PluginElement {}
interface MavenPlugin {}
interface PluginElement {}


}

declare namespace org.jboss.forge.addon.maven.plugins {

class ConfigurationElementBuilder implements ConfigurationElement {

	attributes:java.util.Map<java.lang.String, java.lang.String>;
	children:java.util.List<org.jboss.forge.addon.maven.plugins.PluginElement>;
	name:string;
	parentElement:ConfigurationElementBuilder;
	parentPluginConfig:ConfigurationBuilder;
	plugin:boolean;
	text:string;
	addAttribute( arg0:string,arg1:string ):ConfigurationElementBuilder;
	addChild( arg0:PluginElement ):ConfigurationElementBuilder;
	addChild( arg0:string ):ConfigurationElementBuilder;
	createConfigurationElement( arg0:string ):ConfigurationElementBuilder;
	getChildByContent( arg0:string ):ConfigurationElement;
	getChildByContent( arg0:string,arg1:boolean ):ConfigurationElement;
	getChildByName( arg0:string ):ConfigurationElement;
	getChildByName( arg0:string,arg1:boolean ):ConfigurationElement;
	hasChildByContent( arg0:string ):boolean;
	hasChildByContent( arg0:string,arg1:boolean ):boolean;
	hasChildByName( arg0:string ):boolean;
	hasChildByName( arg0:string,arg1:boolean ):boolean;
	hasChildren(  ):boolean;
	removeAttribute( arg0:string ):ConfigurationElementBuilder;
	setName( arg0:string ):ConfigurationElementBuilder;
	setText( arg0:string ):ConfigurationElementBuilder;
	static create(  ):ConfigurationElementBuilder;
	static create( arg0:ConfigurationBuilder ):ConfigurationElementBuilder;
	static create( arg0:ConfigurationElementBuilder ):ConfigurationElementBuilder;
	static createFromExisting( arg0:ConfigurationElement ):ConfigurationElementBuilder;
	toString(  ):string;

}

}
declare namespace org.jboss.forge.addon.ui.result {

class Results {

	static aggregate( arg0:any ):any;
	static fail(  ):Result;
	static fail( arg0:string ):Result;
	static fail( arg0:string,arg1:any ):Result;
	static navigateTo( arg0:any ):any;
	static navigateTo( arg0:any,arg1:any ):any;
	static navigationBuilder(  ):any;
	static success(  ):Result;
	static success( arg0:string ):Result;
	static toList( arg0:any ):java.util.List<E>;

}

}
declare namespace org.jboss.forge.addon.dependencies.builder {

class CoordinateBuilder implements org.jboss.forge.addon.dependencies.Coordinate {

	artifactId:string;
	classifier:string;
	groupId:string;
	packaging:string;
	snapshot:boolean;
	systemPath:string;
	version:string;
	equals( arg0:any ):boolean;
	hashCode(  ):number;
	setArtifactId( arg0:string ):CoordinateBuilder;
	setClassifier( arg0:string ):CoordinateBuilder;
	setGroupId( arg0:string ):CoordinateBuilder;
	setPackaging( arg0:string ):CoordinateBuilder;
	setSystemPath( arg0:string ):CoordinateBuilder;
	setVersion( arg0:string ):CoordinateBuilder;
	static create(  ):CoordinateBuilder;
	static create( arg0:java.util.Map<K,V> ):CoordinateBuilder;
	static create( arg0:org.jboss.forge.addon.dependencies.Coordinate ):CoordinateBuilder;
	static create( arg0:string ):CoordinateBuilder;
	toString(  ):string;

}

}
declare namespace org.apache.maven.model {

class Dependency implements InputLocationTracker {

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
	clone(  ):any;
	getLocation( arg0:any ):any;
	getOptional(  ):string;
	removeExclusion( arg0:Exclusion ):void;
	setLocation( arg0:any,arg1:any ):void;
	setOptional( arg0:string ):void;
	toString(  ):string;

}

}
declare namespace org.jboss.forge.addon.ui.context {

interface UIBuilder extends UIContextProvider {

	inputComponentFactory?:org.jboss.forge.addon.ui.input.InputComponentFactory;
	add?( arg0:any ):UIBuilder;

}

}
declare namespace org.jboss.forge.addon.ui.input {

interface InputComponentFactory {

	createInput?( arg0:string,arg1:any ):any;
	createInput?( arg0:string,arg1:any,arg2:any ):any;
	createInputMany?( arg0:string,arg1:any ):any;
	createInputMany?( arg0:string,arg1:any,arg2:any ):any;
	createSelectMany?( arg0:string,arg1:any ):any;
	createSelectMany?( arg0:string,arg1:any,arg2:any ):any;
	createSelectOne?( arg0:string,arg1:any ):any;
	createSelectOne?( arg0:string,arg1:any,arg2:any ):any;

}

}
declare namespace org.jboss.forge.addon.maven.dependencies {

class MavenDependencyAdapter extends org.apache.maven.model.Dependency implements org.jboss.forge.addon.dependencies.Dependency {

	artifact:any;
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
	setExclusions( arg0:java.util.Collection<E> ):void;
	static fromAetherList( arg0:java.util.List<E> ):java.util.List<org.jboss.forge.addon.dependencies.Dependency>;
	static fromMavenList( arg0:java.util.List<E> ):java.util.List<org.jboss.forge.addon.dependencies.Dependency>;
	static toMavenList( arg0:java.util.List<E> ):java.util.List<org.apache.maven.model.Dependency>;
	toString(  ):string;

}

}
declare namespace java.util {

interface Map<K,V> {

	empty?:boolean;
	clear?(  ):void;
	compute?( arg0:any,arg1:any ):any;
	computeIfAbsent?( arg0:any,arg1:any ):any;
	computeIfPresent?( arg0:any,arg1:any ):any;
	containsKey?( arg0:any ):boolean;
	containsValue?( arg0:any ):boolean;
	entrySet?(  ):any;
	equals?( arg0:any ):boolean;
	forEach?( arg0:any ):void;
	get?( arg0:any ):any;
	getOrDefault?( arg0:any,arg1:any ):any;
	hashCode?(  ):number;
	keySet?(  ):any;
	merge?( arg0:any,arg1:any,arg2:any ):any;
	put?( arg0:any,arg1:any ):any;
	putAll?( arg0:Map<K,V> ):void;
	putIfAbsent?( arg0:any,arg1:any ):any;
	remove?( arg0:any ):any;
	remove?( arg0:any,arg1:any ):boolean;
	replace?( arg0:any,arg1:any ):any;
	replace?( arg0:any,arg1:any,arg2:any ):boolean;
	replaceAll?( arg0:any ):void;
	size?(  ):number;
	values?(  ):Collection<E>;

}

}
declare namespace org.jboss.forge.addon.ui.result {

interface Result {

	message?:string;

}

}
declare namespace org.jboss.forge.addon.maven.plugins {


class MavenPluginBuilder implements MavenPlugin,PluginElement {

	config:Configuration;
	coordinate:org.jboss.forge.addon.dependencies.Coordinate;
	directDependencies:java.util.List<org.jboss.forge.addon.dependencies.Dependency>;
	extensionsEnabled:boolean;
	addExecution( arg0:Execution ):MavenPluginBuilder;
	addPluginDependency( arg0:org.jboss.forge.addon.dependencies.Dependency ):MavenPluginBuilder;
	createConfiguration(  ):ConfigurationBuilder;
	listExecutions(  ):java.util.List<Execution>;
	setConfiguration( arg0:Configuration ):MavenPluginBuilder;
	setCoordinate( arg0:org.jboss.forge.addon.dependencies.Coordinate ):MavenPluginBuilder;
	setExtensions( arg0:boolean ):MavenPluginBuilder;
	static create(  ):MavenPluginBuilder;
	static create( arg0:any ):MavenPluginBuilder;
	toString(  ):string;

}

class ExecutionBuilder implements Execution {

	config:Configuration;
	goals:java.util.List<java.lang.String>;
	id:string;
	phase:string;
	addGoal( arg0:string ):ExecutionBuilder;
	setConfig( arg0:Configuration ):ExecutionBuilder;
	setId( arg0:string ):ExecutionBuilder;
	setPhase( arg0:string ):ExecutionBuilder;
	static create(  ):ExecutionBuilder;
	static create( arg0:any ):ExecutionBuilder;
	toString(  ):string;

}

}
declare namespace java.lang {

class String {

	bytes:any;
	empty:boolean;
	charAt( arg0:number ):any;
	codePointAt( arg0:number ):number;
	codePointBefore( arg0:number ):number;
	codePointCount( arg0:number,arg1:number ):number;
	compareTo( arg0:any ):number;
	compareTo( arg0:string ):number;
	compareToIgnoreCase( arg0:string ):number;
	concat( arg0:string ):string;
	contains( arg0:any ):boolean;
	contentEquals( arg0:any ):boolean;
	endsWith( arg0:string ):boolean;
	equals( arg0:any ):boolean;
	equalsIgnoreCase( arg0:string ):boolean;
	getBytes( arg0:any ):any;
	getBytes( arg0:number,arg1:number,arg2:any,arg3:number ):void;
	getBytes( arg0:string ):any;
	getChars( arg0:any,arg1:number ):void;
	getChars( arg0:number,arg1:number,arg2:any,arg3:number ):void;
	hashCode(  ):number;
	indexOf( arg0:number ):number;
	indexOf( arg0:number,arg1:number ):number;
	indexOf( arg0:string ):number;
	indexOf( arg0:string,arg1:number ):number;
	indexOfSupplementary( arg0:number,arg1:number ):number;
	intern(  ):string;
	lastIndexOf( arg0:number ):number;
	lastIndexOf( arg0:number,arg1:number ):number;
	lastIndexOf( arg0:string ):number;
	lastIndexOf( arg0:string,arg1:number ):number;
	lastIndexOfSupplementary( arg0:number,arg1:number ):number;
	length(  ):number;
	matches( arg0:string ):boolean;
	nonSyncContentEquals( arg0:any ):boolean;
	offsetByCodePoints( arg0:number,arg1:number ):number;
	regionMatches( arg0:boolean,arg1:number,arg2:string,arg3:number,arg4:number ):boolean;
	regionMatches( arg0:number,arg1:string,arg2:number,arg3:number ):boolean;
	replace( arg0:any,arg1:any ):string;
	replaceAll( arg0:string,arg1:string ):string;
	replaceFirst( arg0:string,arg1:string ):string;
	split( arg0:string ):any;
	split( arg0:string,arg1:number ):any;
	startsWith( arg0:string ):boolean;
	startsWith( arg0:string,arg1:number ):boolean;
	static checkBounds( arg0:any,arg1:number,arg2:number ):void;
	static copyValueOf( arg0:any ):string;
	static copyValueOf( arg0:any,arg1:number,arg2:number ):string;
	static format( arg0:any,arg1:string,arg2:any ):string;
	static format( arg0:string,arg1:any ):string;
	static indexOf( arg0:any,arg1:number,arg2:number,arg3:any,arg4:number,arg5:number,arg6:number ):number;
	static indexOf( arg0:any,arg1:number,arg2:number,arg3:string,arg4:number ):number;
	static join( arg0:any,arg1:any ):string;
	static lastIndexOf( arg0:any,arg1:number,arg2:number,arg3:any,arg4:number,arg5:number,arg6:number ):number;
	static lastIndexOf( arg0:any,arg1:number,arg2:number,arg3:string,arg4:number ):number;
	static valueOf( arg0:any ):string;
	static valueOf( arg0:any,arg1:number,arg2:number ):string;
	static valueOf( arg0:boolean ):string;
	static valueOf( arg0:number ):string;
	subSequence( arg0:number,arg1:number ):any;
	substring( arg0:number ):string;
	substring( arg0:number,arg1:number ):string;
	toCharArray(  ):any;
	toLowerCase(  ):string;
	toLowerCase( arg0:any ):string;
	toString(  ):string;
	toUpperCase(  ):string;
	toUpperCase( arg0:any ):string;
	trim(  ):string;

}

}
declare namespace org.jboss.forge.addon.maven.plugins {

interface Configuration extends PluginElement {

	addConfigurationElement?( arg0:ConfigurationElement ):Configuration;
	getConfigurationElement?( arg0:string ):ConfigurationElement;
	hasConfigurationElement?( arg0:string ):boolean;
	hasConfigurationElements?(  ):boolean;
	listConfigurationElements?(  ):java.util.List<ConfigurationElement>;
	removeConfigurationElement?( arg0:string ):void;

}

}
declare namespace org.jboss.forge.addon.dependencies {

interface Coordinate {

	artifactId?:string;
	classifier?:string;
	groupId?:string;
	packaging?:string;
	snapshot?:boolean;
	systemPath?:string;
	version?:string;

}

}
declare namespace org.jboss.forge.addon.ui.wizard {

interface UIWizard extends org.jboss.forge.addon.ui.command.UICommand {

	next?( arg0:any ):any;

}

}
declare namespace org.jboss.forge.addon.dependencies {

interface Dependency {

	artifact?:any;
	coordinate?:Coordinate;
	excludedCoordinates?:java.util.List<org.jboss.forge.addon.dependencies.Coordinate>;
	optional?:boolean;
	scopeType?:string;

}

}
declare namespace org.apache.maven.model {

class Exclusion implements InputLocationTracker {

	artifactId:string;
	groupId:string;
	clone(  ):Exclusion;
	clone(  ):any;
	getLocation( arg0:any ):any;
	setLocation( arg0:any,arg1:any ):void;

}

}
declare namespace org.jboss.forge.addon.ui.context {

interface UIExecutionContext extends UIContextProvider {

	progressMonitor?:any;
	prompt?:any;

}

}
declare namespace java.util {

interface Collection<E> extends java.lang.Iterable<E> {

	empty?:boolean;
	add?( arg0:any ):boolean;
	addAll?( arg0:Collection<E> ):boolean;
	clear?(  ):void;
	contains?( arg0:any ):boolean;
	containsAll?( arg0:Collection<E> ):boolean;
	equals?( arg0:any ):boolean;
	hashCode?(  ):number;
	iterator?(  ):any;
	parallelStream?(  ):any;
	remove?( arg0:any ):boolean;
	removeAll?( arg0:Collection<E> ):boolean;
	removeIf?( arg0:any ):boolean;
	retainAll?( arg0:Collection<E> ):boolean;
	size?(  ):number;
	spliterator?(  ):any;
	stream?(  ):any;
	toArray?(  ):any;
	toArray?( arg0:any ):any;

}

}
declare namespace org.jboss.forge.addon.ui.command {

interface UICommand {

	execute?( arg0:org.jboss.forge.addon.ui.context.UIExecutionContext ):org.jboss.forge.addon.ui.result.Result;
	getMetadata?( arg0:any ):any;
	initializeUI?( arg0:org.jboss.forge.addon.ui.context.UIBuilder ):void;
	isEnabled?( arg0:any ):boolean;
	validate?( arg0:any ):void;

}

}
declare namespace org.jboss.forge.addon.maven.plugins {

interface Execution {

	config?:Configuration;
	goals?:java.util.List<java.lang.String>;
	id?:string;
	phase?:string;

}

}
declare namespace org.jboss.forge.addon.maven.plugins {

interface ConfigurationElement extends PluginElement {

	attributes?:java.util.Map<java.lang.String, java.lang.String>;
	children?:java.util.List<org.jboss.forge.addon.maven.plugins.PluginElement>;
	name?:string;
	plugin?:boolean;
	text?:string;
	getChildByContent?( arg0:string ):ConfigurationElement;
	getChildByContent?( arg0:string,arg1:boolean ):ConfigurationElement;
	getChildByName?( arg0:string ):ConfigurationElement;
	getChildByName?( arg0:string,arg1:boolean ):ConfigurationElement;
	hasChildByContent?( arg0:string ):boolean;
	hasChildByContent?( arg0:string,arg1:boolean ):boolean;
	hasChildByName?( arg0:string ):boolean;
	hasChildByName?( arg0:string,arg1:boolean ):boolean;
	hasChildren?(  ):boolean;

}

}
declare namespace org.jboss.forge.addon.maven.plugins {

class ConfigurationBuilder implements Configuration {

	origin:any;
	addConfigurationElement( arg0:ConfigurationElement ):Configuration;
	createConfigurationElement( arg0:string ):ConfigurationElementBuilder;
	getConfigurationElement( arg0:string ):ConfigurationElement;
	hasConfigurationElement( arg0:string ):boolean;
	hasConfigurationElements(  ):boolean;
	listConfigurationElements(  ):java.util.List<ConfigurationElement>;
	removeConfigurationElement( arg0:string ):void;
	static create(  ):ConfigurationBuilder;
	static create( arg0:Configuration,arg1:any ):ConfigurationBuilder;
	static create( arg0:any ):ConfigurationBuilder;
	toString(  ):string;

}

}
declare namespace java.util {

interface List<E> extends Collection<E> {

	empty?:boolean;
	add?( arg0:any ):boolean;
	add?( arg0:number,arg1:any ):void;
	addAll?( arg0:Collection<E> ):boolean;
	addAll?( arg0:number,arg1:Collection<E> ):boolean;
	clear?(  ):void;
	contains?( arg0:any ):boolean;
	containsAll?( arg0:Collection<E> ):boolean;
	equals?( arg0:any ):boolean;
	get?( arg0:number ):any;
	hashCode?(  ):number;
	indexOf?( arg0:any ):number;
	iterator?(  ):any;
	lastIndexOf?( arg0:any ):number;
	listIterator?(  ):any;
	listIterator?( arg0:number ):any;
	remove?( arg0:any ):boolean;
	remove?( arg0:number ):any;
	removeAll?( arg0:Collection<E> ):boolean;
	replaceAll?( arg0:any ):void;
	retainAll?( arg0:Collection<E> ):boolean;
	set?( arg0:number,arg1:any ):any;
	size?(  ):number;
	sort?( arg0:any ):void;
	spliterator?(  ):any;
	subList?( arg0:number,arg1:number ):List<E>;
	toArray?(  ):any;
	toArray?( arg0:any ):any;

}

}
declare namespace org.jboss.forge.addon.ui.wizard {

interface UIWizardStep extends UIWizard {


}

}
declare namespace org.jboss.forge.addon.dependencies.builder {

class DependencyBuilder implements org.jboss.forge.addon.dependencies.Dependency {

	artifact:any;
	coordinate:CoordinateBuilder;
	excludedCoordinates:java.util.List<org.jboss.forge.addon.dependencies.Coordinate>;
	groupId:string;
	optional:boolean;
	scopeType:string;
	addExclusion( arg0:org.jboss.forge.addon.dependencies.Coordinate ):DependencyBuilder;
	equals( arg0:any ):boolean;
	getCoordinate(  ):org.jboss.forge.addon.dependencies.Coordinate;
	hashCode(  ):number;
	setArtifact( arg0:any ):DependencyBuilder;
	setArtifactId( arg0:string ):DependencyBuilder;
	setClassifier( arg0:string ):DependencyBuilder;
	setCoordinate( arg0:org.jboss.forge.addon.dependencies.Coordinate ):DependencyBuilder;
	setExcludedCoordinates( arg0:java.util.List<E> ):DependencyBuilder;
	setGroupId( arg0:string ):DependencyBuilder;
	setOptional( arg0:boolean ):DependencyBuilder;
	setPackaging( arg0:string ):DependencyBuilder;
	setScopeType( arg0:string ):DependencyBuilder;
	setVersion( arg0:string ):DependencyBuilder;
	static create(  ):DependencyBuilder;
	static create( arg0:org.jboss.forge.addon.dependencies.Dependency ):DependencyBuilder;
	static create( arg0:string ):DependencyBuilder;
	toString(  ):string;

}

}
declare namespace org.jboss.forge.addon.ui.context {

interface UIContextProvider {

	UIContext?:any;

}

}
