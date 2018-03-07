/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        document.getElementById('twitter').onclick = function(evt){
            console.log('Twitter');
            window.plugins.socialsharing.canShareVia('twitter', 'msg', null, null, null, function(e){alert(e)}, function(e){alert(e)})
        };

        document.getElementById('twitter2').onclick = function(evt){
            console.log('Twitter2');
            window.plugins.socialsharing.canShareVia('com.apple.social.twitter', 'msg', null, null, null, function(e){alert(e)}, function(e){alert(e)})
        };

        document.getElementById('facebook').onclick = function(evt){
            console.log('facebook');
            window.plugins.socialsharing.canShareVia('com.apple.social.facebook', 'msg', null, null, null, function(e){alert(e)}, function(e){alert(e)})
        };

        document.getElementById('whatsapp').onclick = function(evt){
            console.log('whatsapp');
            window.plugins.socialsharing.canShareVia('whatsapp', 'msg', null, null, null, function(e){alert(e)}, function(e){alert(e)})
        };

        document.getElementById('sms').onclick = function(evt){
            console.log('sms');
            window.plugins.socialsharing.canShareVia('sms', 'msg', null, null, null, function(e){alert(e)}, function(e){alert(e)})
        };

        document.getElementById('instagram').onclick = function(evt){
            console.log('instagram');
            window.plugins.socialsharing.canShareVia('instagram', 'msg', null, null, null, function(e){alert(e)}, function(e){alert(e)})
        };

        document.getElementById('email').onclick = function(evt){
            console.log('email');
            window.plugins.socialsharing.canShareViaEmail(function(e){alert(e)}, function(e){alert(e)})
        };
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
