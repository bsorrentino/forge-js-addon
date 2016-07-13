/*
 * Copyright 2016 softphone.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.bsc.script.rhino.npm;

import org.junit.runner.notification.RunNotifier;
import org.junit.runners.BlockJUnit4ClassRunner;
import org.junit.runners.model.FrameworkMethod;
import org.junit.runners.model.InitializationError;

/**
 *
 * @author softphone
 */
public class MultiThreadedRunner extends BlockJUnit4ClassRunner {
    
    public MultiThreadedRunner (Class<?> klass) throws InitializationError {
        super (klass);
    }
    
    @Override
    protected void runChild(final FrameworkMethod method, final RunNotifier notifier) {
        final Test test = new Test(method, notifier);
        
        final Thread t = new Thread (test);
        t.start();
        try {
            t.join();
        } catch (InterruptedException ex) {
            System.err.println ("Interrupted: " + method.getName());            
        }
    }
    
    class Test implements Runnable {
        private final FrameworkMethod method;
        private final RunNotifier notifier;
        
        public Test (final FrameworkMethod method, final RunNotifier notifier) {
            this.method = method;
            this.notifier = notifier;
        }
        
        @Override
        public void run () {
            System.err.printf( "executing ... [%s] on thread [%d]\ns", method.getName(), Thread.currentThread().getId());
            MultiThreadedRunner.super.runChild(method, notifier);            
        }
    }
    
}
