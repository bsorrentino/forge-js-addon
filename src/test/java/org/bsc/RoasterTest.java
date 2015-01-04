package org.bsc;

import org.hamcrest.core.IsNull;
import org.jboss.forge.roaster.Roaster;
import org.jboss.forge.roaster.model.source.JavaClassSource;
import org.jboss.forge.roaster.model.source.MethodSource;
import org.junit.Assert;
import org.junit.Test;

public class RoasterTest {

	
	@Test
	public void createJavaFile() {
		
		final JavaClassSource jcs = Roaster.create(  JavaClassSource.class );
		
		Assert.assertThat( jcs, IsNull.notNullValue());
		
		final String className = "JQMMyPage";
		jcs.setPublic()
			.setName( className )
			.addInterface("JQMPageEvent.Handler")			
			.addField( String.format("public static final UiBinder BINDER = GWT.create(%s.UiBinder.class);", className))
			.getOrigin()
			.addField( String.format("public final static JQMPage INSTANCE = new %s().page;", className))
			.getOrigin()
			.addField( String.format("private final JQMPage page = %s.BINDER.createAndBindUi(this);", className))
			.getOrigin()
			.addMethod().setConstructor(true).setBody("page.addPageHandler(this);")
			.getOrigin()
			;
			{
			MethodSource<?> m = jcs.addMethod()
									.setName("onInit")
									.setReturnTypeVoid()
									.setPublic()
									.setBody("");
			m.addParameter("com.sksamuel.jqm4gwt.JQMPageEvent", "event");
			m.addAnnotation(Override.class);
			}

			{
			MethodSource<?> m = jcs.addMethod()
				.setName("onBeforeShow")
				.setReturnTypeVoid()
				.setPublic()
				.setBody("");
			
			m.addParameter("com.sksamuel.jqm4gwt.JQMPageEvent", "event");
			m.addAnnotation(Override.class);
			}
			{
			MethodSource<?> m = jcs.addMethod()
				.setName("onBeforeHide")
				.setReturnTypeVoid()
				.setPublic()
				.setBody("");
			
			m.addParameter("com.sksamuel.jqm4gwt.JQMPageEvent", "event");
			m.addAnnotation(Override.class);
			}
			{
			MethodSource<?> m = jcs.addMethod()
				.setName("onShow")
				.setReturnTypeVoid()
				.setPublic()
				.setBody("");
			
			m.addParameter("com.sksamuel.jqm4gwt.JQMPageEvent", "event");
			m.addAnnotation(Override.class);
			}
			{
			MethodSource<?> m = jcs.addMethod()
				.setName("onHide")
				.setReturnTypeVoid()
				.setPublic()
				.setBody("");
			
			m.addParameter("com.sksamuel.jqm4gwt.JQMPageEvent", "event");
			m.addAnnotation(Override.class);
			}
			
			
			jcs.addImport("com.sksamuel.jqm4gwt.JQMPage");
			jcs.addImport("com.sksamuel.jqm4gwt.JQMPageEvent");
			jcs.addNestedType(String.format("interface UiBinder extends com.google.gwt.uibinder.client.UiBinder<JQMPage, %s> { }", className));
			
		System.out.println( jcs );
	}
}
