(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.initCppJs = factory());
})(this, (function () { 'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var averagemaipupersonCppAppWasmWasm32StRelease_browser = {exports: {}};

	var hasRequiredAveragemaipupersonCppAppWasmWasm32StRelease_browser;

	function requireAveragemaipupersonCppAppWasmWasm32StRelease_browser () {
		if (hasRequiredAveragemaipupersonCppAppWasmWasm32StRelease_browser) return averagemaipupersonCppAppWasmWasm32StRelease_browser.exports;
		hasRequiredAveragemaipupersonCppAppWasmWasm32StRelease_browser = 1;
		(function (module, exports) {
			var Module2=(()=>{var _scriptName=globalThis.document?.currentScript?.src;return async function(moduleArg={}){var moduleRtn;var Module=moduleArg;var ENVIRONMENT_IS_WEB=!!globalThis.window;var ENVIRONMENT_IS_WORKER=!!globalThis.WorkerGlobalScope;globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};if(ENVIRONMENT_IS_WORKER){_scriptName=self.location.href;}var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var readAsync,readBinary;if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){try{scriptDirectory=new URL(".",_scriptName).href;}catch{}{if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)};}readAsync=async url=>{if(isFileURI(url)){return new Promise((resolve,reject)=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=()=>{if(xhr.status==200||xhr.status==0&&xhr.response){resolve(xhr.response);return}reject(xhr.status);};xhr.onerror=reject;xhr.send(null);})}var response=await fetch(url,{credentials:"same-origin"});if(response.ok){return response.arrayBuffer()}throw new Error(response.status+" : "+response.url)};}}var out=console.log.bind(console);var err=console.error.bind(console);var wasmBinary;var ABORT=false;var EXITSTATUS;var isFileURI=filename=>filename.startsWith("file://");var readyPromiseResolve,readyPromiseReject;var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;var HEAP64,HEAPU64;var runtimeInitialized=false;function updateMemoryViews(){var b=wasmMemory.buffer;HEAP8=new Int8Array(b);HEAP16=new Int16Array(b);HEAPU8=new Uint8Array(b);HEAPU16=new Uint16Array(b);HEAP32=new Int32Array(b);HEAPU32=new Uint32Array(b);HEAPF32=new Float32Array(b);HEAPF64=new Float64Array(b);HEAP64=new BigInt64Array(b);HEAPU64=new BigUint64Array(b);}function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift());}}callRuntimeCallbacks(onPreRuns);}function initRuntime(){runtimeInitialized=true;wasmExports["qa"]();}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift());}}callRuntimeCallbacks(onPostRuns);}function abort(what){Module["onAbort"]?.(what);what="Aborted("+what+")";err(what);ABORT=true;what+=". Build with -sASSERTIONS for more info.";if(runtimeInitialized){___trap();}var e=new WebAssembly.RuntimeError(what);readyPromiseReject?.(e);throw e}var wasmBinaryFile;function findWasmBinary(){return locateFile("averagemaipuperson-cpp-app-wasm-wasm32-st-release.browser.wasm")}function getBinarySync(file){if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw "both async and sync fetching of the wasm failed"}async function getWasmBinary(binaryFile){if(!wasmBinary){try{var response=await readAsync(binaryFile);return new Uint8Array(response)}catch{}}return getBinarySync(binaryFile)}async function instantiateArrayBuffer(binaryFile,imports){try{var binary=await getWasmBinary(binaryFile);var instance=await WebAssembly.instantiate(binary,imports);return instance}catch(reason){err(`failed to asynchronously prepare wasm: ${reason}`);abort(reason);}}async function instantiateAsync(binary,binaryFile,imports){if(!binary&&!isFileURI(binaryFile)){try{var response=fetch(binaryFile,{credentials:"same-origin"});var instantiationResult=await WebAssembly.instantiateStreaming(response,imports);return instantiationResult}catch(reason){err(`wasm streaming compile failed: ${reason}`);err("falling back to ArrayBuffer instantiation");}}return instantiateArrayBuffer(binaryFile,imports)}function getWasmImports(){var imports={a:wasmImports};return imports}async function createWasm(){function receiveInstance(instance,module){wasmExports=instance.exports;assignWasmExports(wasmExports);updateMemoryViews();return wasmExports}function receiveInstantiationResult(result){return receiveInstance(result["instance"])}var info=getWasmImports();if(Module["instantiateWasm"]){return new Promise((resolve,reject)=>{Module["instantiateWasm"](info,(inst,mod)=>{resolve(receiveInstance(inst));});})}wasmBinaryFile??=findWasmBinary();var result=await instantiateAsync(wasmBinary,wasmBinaryFile,info);var exports=receiveInstantiationResult(result);return exports}class ExitStatus{name="ExitStatus";constructor(status){this.message=`Program terminated with exit(${status})`;this.status=status;}}var callRuntimeCallbacks=callbacks=>{while(callbacks.length>0){callbacks.shift()(Module);}};var onPostRuns=[];var addOnPostRun=cb=>onPostRuns.push(cb);var onPreRuns=[];var addOnPreRun=cb=>onPreRuns.push(cb);var noExitRuntime=true;var wasmTableMirror=[];var getWasmTableEntry=funcPtr=>{var func=wasmTableMirror[funcPtr];if(!func){wasmTableMirror[funcPtr]=func=wasmTable.get(funcPtr);}return func};var ___call_sighandler=(fp,sig)=>getWasmTableEntry(fp)(sig);var __abort_js=()=>abort("");var AsciiToString=ptr=>{var str="";while(1){var ch=HEAPU8[ptr++];if(!ch)return str;str+=String.fromCharCode(ch);}};var awaitingDependencies={};var registeredTypes={};var typeDependencies={};var BindingError=class BindingError extends Error{constructor(message){super(message);this.name="BindingError";}};var throwBindingError=message=>{throw new BindingError(message)};function sharedRegisterType(rawType,registeredInstance,options={}){var name=registeredInstance.name;if(!rawType){throwBindingError(`type "${name}" must have a positive integer typeid pointer`);}if(registeredTypes.hasOwnProperty(rawType)){if(options.ignoreDuplicateRegistrations){return}else {throwBindingError(`Cannot register type '${name}' twice`);}}registeredTypes[rawType]=registeredInstance;delete typeDependencies[rawType];if(awaitingDependencies.hasOwnProperty(rawType)){var callbacks=awaitingDependencies[rawType];delete awaitingDependencies[rawType];callbacks.forEach(cb=>cb());}}function registerType(rawType,registeredInstance,options={}){return sharedRegisterType(rawType,registeredInstance,options)}var integerReadValueFromPointer=(name,width,signed)=>{switch(width){case 1:return signed?pointer=>HEAP8[pointer]:pointer=>HEAPU8[pointer];case 2:return signed?pointer=>HEAP16[pointer>>1]:pointer=>HEAPU16[pointer>>1];case 4:return signed?pointer=>HEAP32[pointer>>2]:pointer=>HEAPU32[pointer>>2];case 8:return signed?pointer=>HEAP64[pointer>>3]:pointer=>HEAPU64[pointer>>3];default:throw new TypeError(`invalid integer width (${width}): ${name}`)}};var __embind_register_bigint=(primitiveType,name,size,minRange,maxRange)=>{name=AsciiToString(name);const isUnsignedType=minRange===0n;let fromWireType=value=>value;if(isUnsignedType){const bitSize=size*8;fromWireType=value=>BigInt.asUintN(bitSize,value);maxRange=fromWireType(maxRange);}registerType(primitiveType,{name,fromWireType,toWireType:(destructors,value)=>{if(typeof value=="number"){value=BigInt(value);}return value},readValueFromPointer:integerReadValueFromPointer(name,size,!isUnsignedType),destructorFunction:null});};var __embind_register_bool=(rawType,name,trueValue,falseValue)=>{name=AsciiToString(name);registerType(rawType,{name,fromWireType:function(wt){return !!wt},toWireType:function(destructors,o){return o?trueValue:falseValue},readValueFromPointer:function(pointer){return this.fromWireType(HEAPU8[pointer])},destructorFunction:null});};var shallowCopyInternalPointer=o=>({count:o.count,deleteScheduled:o.deleteScheduled,preservePointerOnDelete:o.preservePointerOnDelete,ptr:o.ptr,ptrType:o.ptrType,smartPtr:o.smartPtr,smartPtrType:o.smartPtrType});var throwInstanceAlreadyDeleted=obj=>{function getInstanceTypeName(handle){return handle.$$.ptrType.registeredClass.name}throwBindingError(getInstanceTypeName(obj)+" instance already deleted");};var finalizationRegistry=false;var detachFinalizer=handle=>{};var runDestructor=$$=>{if($$.smartPtr){$$.smartPtrType.rawDestructor($$.smartPtr);}else {$$.ptrType.registeredClass.rawDestructor($$.ptr);}};var releaseClassHandle=$$=>{$$.count.value-=1;var toDelete=0===$$.count.value;if(toDelete){runDestructor($$);}};var attachFinalizer=handle=>{if(!globalThis.FinalizationRegistry){attachFinalizer=handle=>handle;return handle}finalizationRegistry=new FinalizationRegistry(info=>{releaseClassHandle(info.$$);});attachFinalizer=handle=>{var $$=handle.$$;var hasSmartPtr=!!$$.smartPtr;if(hasSmartPtr){var info={$$};finalizationRegistry.register(handle,info,handle);}return handle};detachFinalizer=handle=>finalizationRegistry.unregister(handle);return attachFinalizer(handle)};var init_ClassHandle=()=>{let proto=ClassHandle.prototype;Object.assign(proto,{isAliasOf(other){if(!(this instanceof ClassHandle)){return false}if(!(other instanceof ClassHandle)){return false}var leftClass=this.$$.ptrType.registeredClass;var left=this.$$.ptr;other.$$=other.$$;var rightClass=other.$$.ptrType.registeredClass;var right=other.$$.ptr;while(leftClass.baseClass){left=leftClass.upcast(left);leftClass=leftClass.baseClass;}while(rightClass.baseClass){right=rightClass.upcast(right);rightClass=rightClass.baseClass;}return leftClass===rightClass&&left===right},clone(){if(!this.$$.ptr){throwInstanceAlreadyDeleted(this);}if(this.$$.preservePointerOnDelete){this.$$.count.value+=1;return this}else {var clone=attachFinalizer(Object.create(Object.getPrototypeOf(this),{$$:{value:shallowCopyInternalPointer(this.$$)}}));clone.$$.count.value+=1;clone.$$.deleteScheduled=false;return clone}},delete(){if(!this.$$.ptr){throwInstanceAlreadyDeleted(this);}if(this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete){throwBindingError("Object already scheduled for deletion");}detachFinalizer(this);releaseClassHandle(this.$$);if(!this.$$.preservePointerOnDelete){this.$$.smartPtr=undefined;this.$$.ptr=undefined;}},isDeleted(){return !this.$$.ptr},deleteLater(){if(!this.$$.ptr){throwInstanceAlreadyDeleted(this);}if(this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete){throwBindingError("Object already scheduled for deletion");}this.$$.deleteScheduled=true;return this}});const symbolDispose=Symbol.dispose;if(symbolDispose){proto[symbolDispose]=proto["delete"];}};function ClassHandle(){}var createNamedFunction=(name,func)=>Object.defineProperty(func,"name",{value:name});var registeredPointers={};var ensureOverloadTable=(proto,methodName,humanName)=>{if(undefined===proto[methodName].overloadTable){var prevFunc=proto[methodName];proto[methodName]=function(...args){if(!proto[methodName].overloadTable.hasOwnProperty(args.length)){throwBindingError(`Function '${humanName}' called with an invalid number of arguments (${args.length}) - expects one of (${proto[methodName].overloadTable})!`);}return proto[methodName].overloadTable[args.length].apply(this,args)};proto[methodName].overloadTable=[];proto[methodName].overloadTable[prevFunc.argCount]=prevFunc;}};var getSignature=(args,keys)=>{var signature="";keys.some(key=>{if(key.length!==args.length){return false}var isKeyMatched=key.every((field,i)=>field==="emscripten::val"||typeof args[i]==="bigint"&&field==="number"||typeof args[i]==="object"&&undefined!==registeredTypes[field]&&args[i]instanceof registeredTypes[field].registeredClass.constructor||typeof args[i]===field);if(isKeyMatched){signature=key.join(", ");return true}return false});return signature};var ensureOverloadSignatureTable=(proto,methodName,humanName,numArguments)=>{ensureOverloadTable(proto,methodName,humanName);if(undefined!==proto[methodName].overloadTable&&undefined!==proto[methodName].overloadTable[numArguments]&&undefined===proto[methodName].overloadTable[numArguments].signatures){var prevFunc=proto[methodName].overloadTable[numArguments];proto[methodName].overloadTable[numArguments]=function(...args){var keys=proto[methodName].overloadTable[args.length].signaturesArray;var signature=getSignature(args,keys);if(!proto[methodName].overloadTable[args.length].signatures.hasOwnProperty(signature)){var signatures=proto[methodName].overloadTable[args.length].signaturesArray.map(sig=>"("+sig.map(s=>typeof s==="string"?s:registeredTypes[s].name)+")");var params=args.map(arg=>typeof arg==="object"&&arg.constructor&&arg.constructor.name?arg.constructor.name:typeof arg);throwBindingError(`Function '${humanName}' called with an invalid signature (${params}) - expects one of (${signatures})!`);}return proto[methodName].overloadTable[args.length].signatures[signature].apply(this,args)};proto[methodName].overloadTable[numArguments].signatures={};proto[methodName].overloadTable[numArguments].signatures[prevFunc.signature]=prevFunc;proto[methodName].overloadTable[numArguments].signaturesArray=[];}};var exposePublicSymbol=(name,value,numArguments,rawSignature)=>{if(Module.hasOwnProperty(name)){if(undefined===numArguments||Module[name].signature===rawSignature||undefined!==Module[name].overloadTable&&undefined!==Module[name].overloadTable[numArguments]&&Module[name].overloadTable[numArguments].signature===rawSignature||undefined!==Module[name].overloadTable&&undefined!==Module[name].overloadTable[numArguments]&&undefined!==Module[name].overloadTable[numArguments].signatures&&undefined!==Module[name].overloadTable[numArguments].signatures[rawSignature]){throwBindingError(`Cannot register public name '${name}' twice`);}if(undefined===Module[name].overloadTable&&Module[name].argCount===numArguments||undefined!==Module[name].overloadTable&&undefined!==Module[name].overloadTable[numArguments]){ensureOverloadSignatureTable(Module,name,name,numArguments);Module[name].overloadTable[numArguments].signatures[rawSignature]=value;}else {ensureOverloadTable(Module,name,name);Module[name].overloadTable[numArguments]=value;Module[name].overloadTable[numArguments].signature=rawSignature;}}else {Module[name]=value;if(undefined!==rawSignature){Module[name].argCount=numArguments;Module[name].signature=rawSignature;}}};var char_0=48;var char_9=57;var makeLegalFunctionName=name=>{name=name.replace(/[^a-zA-Z0-9_]/g,"$");var f=name.charCodeAt(0);if(f>=char_0&&f<=char_9){return `_${name}`}return name};function RegisteredClass(name,constructor,instancePrototype,rawDestructor,baseClass,getActualType,upcast,downcast){this.name=name;this.constructor=constructor;this.instancePrototype=instancePrototype;this.rawDestructor=rawDestructor;this.baseClass=baseClass;this.getActualType=getActualType;this.upcast=upcast;this.downcast=downcast;this.pureVirtualFunctions=[];}var upcastPointer=(ptr,ptrClass,desiredClass)=>{while(ptrClass!==desiredClass){if(!ptrClass.upcast){throwBindingError(`Expected null or instance of ${desiredClass.name}, got an instance of ${ptrClass.name}`);}ptr=ptrClass.upcast(ptr);ptrClass=ptrClass.baseClass;}return ptr};var embindRepr=v=>{if(v===null){return "null"}var t=typeof v;if(t==="object"||t==="array"||t==="function"){return v.toString()}else {return ""+v}};function constNoSmartPtrRawPointerToWireType(destructors,handle){if(handle===null){if(this.isReference){throwBindingError(`null is not a valid ${this.name}`);}return 0}if(!handle.$$){throwBindingError(`Cannot pass "${embindRepr(handle)}" as a ${this.name}`);}if(!handle.$$.ptr){throwBindingError(`Cannot pass deleted object as a pointer of type ${this.name}`);}var handleClass=handle.$$.ptrType.registeredClass;var ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);return ptr}function genericPointerToWireType(destructors,handle){var ptr;if(handle===null){if(this.isReference){throwBindingError(`null is not a valid ${this.name}`);}if(this.isSmartPointer){ptr=this.rawConstructor();if(destructors!==null){destructors.push(this.rawDestructor,ptr);}return ptr}else {return 0}}if(!handle||!handle.$$){throwBindingError(`Cannot pass "${embindRepr(handle)}" as a ${this.name}`);}if(!handle.$$.ptr){throwBindingError(`Cannot pass deleted object as a pointer of type ${this.name}`);}if(!this.isConst&&handle.$$.ptrType.isConst){throwBindingError(`Cannot convert argument of type ${handle.$$.smartPtrType?handle.$$.smartPtrType.name:handle.$$.ptrType.name} to parameter type ${this.name}`);}var handleClass=handle.$$.ptrType.registeredClass;ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);if(this.isSmartPointer){if(undefined===handle.$$.smartPtr){throwBindingError("Passing raw pointer to smart pointer is illegal");}switch(this.sharingPolicy){case 0:if(handle.$$.smartPtrType===this){ptr=handle.$$.smartPtr;}else {throwBindingError(`Cannot convert argument of type ${handle.$$.smartPtrType?handle.$$.smartPtrType.name:handle.$$.ptrType.name} to parameter type ${this.name}`);}break;case 1:ptr=handle.$$.smartPtr;break;case 2:if(handle.$$.smartPtrType===this){ptr=handle.$$.smartPtr;}else {var clonedHandle=handle["clone"]();ptr=this.rawShare(ptr,Emval.toHandle(()=>clonedHandle["delete"]()));if(destructors!==null){destructors.push(this.rawDestructor,ptr);}}break;default:throwBindingError("Unsupported sharing policy");}}return ptr}function nonConstNoSmartPtrRawPointerToWireType(destructors,handle){if(handle===null){if(this.isReference){throwBindingError(`null is not a valid ${this.name}`);}return 0}if(!handle.$$){throwBindingError(`Cannot pass "${embindRepr(handle)}" as a ${this.name}`);}if(!handle.$$.ptr){throwBindingError(`Cannot pass deleted object as a pointer of type ${this.name}`);}if(handle.$$.ptrType.isConst){throwBindingError(`Cannot convert argument of type ${handle.$$.ptrType.name} to parameter type ${this.name}`);}var handleClass=handle.$$.ptrType.registeredClass;var ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);return ptr}function readPointer(pointer){return this.fromWireType(HEAPU32[pointer>>2])}var downcastPointer=(ptr,ptrClass,desiredClass)=>{if(ptrClass===desiredClass){return ptr}if(undefined===desiredClass.baseClass){return null}var rv=downcastPointer(ptr,ptrClass,desiredClass.baseClass);if(rv===null){return null}return desiredClass.downcast(rv)};var registeredInstances={};var getBasestPointer=(class_,ptr)=>{if(ptr===undefined){throwBindingError("ptr should not be undefined");}while(class_.baseClass){ptr=class_.upcast(ptr);class_=class_.baseClass;}return ptr};var getInheritedInstance=(class_,ptr)=>{ptr=getBasestPointer(class_,ptr);return registeredInstances[ptr]};var InternalError=class InternalError extends Error{constructor(message){super(message);this.name="InternalError";}};var throwInternalError=message=>{throw new InternalError(message)};var makeClassHandle=(prototype,record)=>{if(!record.ptrType||!record.ptr){throwInternalError("makeClassHandle requires ptr and ptrType");}var hasSmartPtrType=!!record.smartPtrType;var hasSmartPtr=!!record.smartPtr;if(hasSmartPtrType!==hasSmartPtr){throwInternalError("Both smartPtrType and smartPtr must be specified");}record.count={value:1};return attachFinalizer(Object.create(prototype,{$$:{value:record,writable:true}}))};function RegisteredPointer_fromWireType(ptr){var rawPointer=this.getPointee(ptr);if(!rawPointer){this.destructor(ptr);return null}var registeredInstance=getInheritedInstance(this.registeredClass,rawPointer);if(undefined!==registeredInstance){if(0===registeredInstance.$$.count.value){registeredInstance.$$.ptr=rawPointer;registeredInstance.$$.smartPtr=ptr;return registeredInstance["clone"]()}else {var rv=registeredInstance["clone"]();this.destructor(ptr);return rv}}function makeDefaultHandle(){if(this.isSmartPointer){return makeClassHandle(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:rawPointer,smartPtrType:this,smartPtr:ptr})}else {return makeClassHandle(this.registeredClass.instancePrototype,{ptrType:this,ptr})}}var actualType=this.registeredClass.getActualType(rawPointer);var registeredPointerRecord=registeredPointers[actualType];if(!registeredPointerRecord){return makeDefaultHandle.call(this)}var toType;if(this.isConst){toType=registeredPointerRecord.constPointerType;}else {toType=registeredPointerRecord.pointerType;}var dp=downcastPointer(rawPointer,this.registeredClass,toType.registeredClass);if(dp===null){return makeDefaultHandle.call(this)}if(this.isSmartPointer){return makeClassHandle(toType.registeredClass.instancePrototype,{ptrType:toType,ptr:dp,smartPtrType:this,smartPtr:ptr})}else {return makeClassHandle(toType.registeredClass.instancePrototype,{ptrType:toType,ptr:dp})}}var init_RegisteredPointer=()=>{Object.assign(RegisteredPointer.prototype,{getPointee(ptr){if(this.rawGetPointee){ptr=this.rawGetPointee(ptr);}return ptr},destructor(ptr){this.rawDestructor?.(ptr);},readValueFromPointer:readPointer,fromWireType:RegisteredPointer_fromWireType});};function RegisteredPointer(name,registeredClass,isReference,isConst,isSmartPointer,pointeeType,sharingPolicy,rawGetPointee,rawConstructor,rawShare,rawDestructor){this.name=name;this.registeredClass=registeredClass;this.isReference=isReference;this.isConst=isConst;this.isSmartPointer=isSmartPointer;this.pointeeType=pointeeType;this.sharingPolicy=sharingPolicy;this.rawGetPointee=rawGetPointee;this.rawConstructor=rawConstructor;this.rawShare=rawShare;this.rawDestructor=rawDestructor;if(!isSmartPointer&&registeredClass.baseClass===undefined){if(isConst){this.toWireType=constNoSmartPtrRawPointerToWireType;this.destructorFunction=null;}else {this.toWireType=nonConstNoSmartPtrRawPointerToWireType;this.destructorFunction=null;}}else {this.toWireType=genericPointerToWireType;}}var replacePublicSymbol=(name,value,numArguments,signatureArray,rawSignature)=>{if(!Module.hasOwnProperty(name)){throwInternalError("Replacing nonexistent public symbol");}var signatureString=undefined!==signatureArray?signatureArray.join(", "):undefined;if(undefined!==Module[name].overloadTable&&undefined!==numArguments){if(undefined!==Module[name].overloadTable[numArguments]&&undefined!==Module[name].overloadTable[numArguments].signatures&&signatureString){if(undefined!==Module[name].overloadTable[numArguments].signatures[rawSignature]){delete Module[name].overloadTable[numArguments].signatures[rawSignature];}if(undefined!==Module[name].overloadTable[numArguments].signatures[signatureString]){throwBindingError(`Cannot register multiple overloads of a function with the same number of arguments (${numArguments})!`);}Module[name].overloadTable[numArguments].signatures[signatureString]=value;Module[name].overloadTable[numArguments].signaturesArray.push(signatureArray);}else {Module[name].overloadTable[numArguments]=value;}}else {Module[name]=value;Module[name].argCount=numArguments;Module[name].signature=signatureString;}};var embind__requireFunction=(signature,rawFunction,isAsync=false)=>{signature=AsciiToString(signature);function makeDynCaller(){var rtn=getWasmTableEntry(rawFunction);return rtn}var fp=makeDynCaller();if(typeof fp!="function"){throwBindingError(`unknown function pointer with signature ${signature}: ${rawFunction}`);}return fp};class UnboundTypeError extends Error{}var getTypeName=type=>{var ptr=___getTypeName(type);var rv=AsciiToString(ptr);_free(ptr);return rv};var throwUnboundTypeError=(message,types)=>{var unboundTypes=[];var seen={};function visit(type){if(seen[type]){return}if(registeredTypes[type]){return}if(typeDependencies[type]){typeDependencies[type].forEach(visit);return}unboundTypes.push(type);seen[type]=true;}types.forEach(visit);throw new UnboundTypeError(`${message}: `+unboundTypes.map(getTypeName).join([", "]))};var whenDependentTypesAreResolved=(myTypes,dependentTypes,getTypeConverters)=>{myTypes.forEach(type=>typeDependencies[type]=dependentTypes);function onComplete(typeConverters){var myTypeConverters=getTypeConverters(typeConverters);if(myTypeConverters.length!==myTypes.length){throwInternalError("Mismatched type converter count");}for(var i=0;i<myTypes.length;++i){registerType(myTypes[i],myTypeConverters[i]);}}var typeConverters=new Array(dependentTypes.length);var unregisteredTypes=[];var registered=0;for(let[i,dt]of dependentTypes.entries()){if(registeredTypes.hasOwnProperty(dt)){typeConverters[i]=registeredTypes[dt];}else {unregisteredTypes.push(dt);if(!awaitingDependencies.hasOwnProperty(dt)){awaitingDependencies[dt]=[];}awaitingDependencies[dt].push(()=>{typeConverters[i]=registeredTypes[dt];++registered;if(registered===unregisteredTypes.length){onComplete(typeConverters);}});}}if(0===unregisteredTypes.length){onComplete(typeConverters);}};var __embind_register_class=(rawType,rawPointerType,rawConstPointerType,baseClassRawType,getActualTypeSignature,getActualType,upcastSignature,upcast,downcastSignature,downcast,name,destructorSignature,rawDestructor)=>{name=AsciiToString(name);getActualType=embind__requireFunction(getActualTypeSignature,getActualType);upcast&&=embind__requireFunction(upcastSignature,upcast);downcast&&=embind__requireFunction(downcastSignature,downcast);rawDestructor=embind__requireFunction(destructorSignature,rawDestructor);var legalFunctionName=makeLegalFunctionName(name);exposePublicSymbol(legalFunctionName,function(){throwUnboundTypeError(`Cannot construct ${name} due to unbound types`,[baseClassRawType]);});whenDependentTypesAreResolved([rawType,rawPointerType,rawConstPointerType],baseClassRawType?[baseClassRawType]:[],base=>{base=base[0];var baseClass;var basePrototype;if(baseClassRawType){baseClass=base.registeredClass;basePrototype=baseClass.instancePrototype;}else {basePrototype=ClassHandle.prototype;}var constructor=createNamedFunction(name,function(...args){if(Object.getPrototypeOf(this)!==instancePrototype){throw new BindingError(`Use 'new' to construct ${name}`)}if(undefined===registeredClass.constructor_body){throw new BindingError(`${name} has no accessible constructor`)}var body=undefined;if(undefined!==registeredClass.constructor_body[args.length]){if(undefined!==registeredClass.constructor_body[args.length].func){body=registeredClass.constructor_body[args.length].func;}else {var keys=registeredClass.constructor_body[args.length].signaturesArray;var signature=getSignature(args,keys);body=registeredClass.constructor_body[args.length].signatures[signature];}}if(undefined===body){if(undefined===registeredClass.constructor_body[args.length]){throw new BindingError(`Tried to invoke ctor of ${name} with invalid number of parameters (${args.length}) - expected (${Object.keys(registeredClass.constructor_body).toString()}) parameters instead!`)}else {var signatures=registeredClass.constructor_body[args.length].signaturesArray.map(sig=>"("+sig.map(s=>typeof s==="string"?s:registeredTypes[s].name)+")");var params=args.map(arg=>typeof arg==="object"&&arg.constructor&&arg.constructor.name?arg.constructor.name:typeof arg);throw new BindingError(`Tried to invoke ctor of ${name} with invalid signature (${params}) - expected [${signatures}] parameters instead!`)}}return body.apply(this,args)});var instancePrototype=Object.create(basePrototype,{constructor:{value:constructor}});constructor.prototype=instancePrototype;var registeredClass=new RegisteredClass(name,constructor,instancePrototype,rawDestructor,baseClass,getActualType,upcast,downcast);if(registeredClass.baseClass){registeredClass.baseClass.__derivedClasses??=[];registeredClass.baseClass.__derivedClasses.push(registeredClass);}var referenceConverter=new RegisteredPointer(name,registeredClass,true,false,false);var pointerConverter=new RegisteredPointer(name+"*",registeredClass,false,false,false);var constPointerConverter=new RegisteredPointer(name+" const*",registeredClass,false,true,false);registeredPointers[rawType]={pointerType:pointerConverter,constPointerType:constPointerConverter};replacePublicSymbol(legalFunctionName,constructor);return [referenceConverter,pointerConverter,constPointerConverter]});};var heap32VectorToArray=(count,firstElement)=>{var array=[];for(var i=0;i<count;i++){array.push(HEAPU32[firstElement+i*4>>2]);}return array};var runDestructors=destructors=>{while(destructors.length){var ptr=destructors.pop();var del=destructors.pop();del(ptr);}};function usesDestructorStack(argTypes){for(var i=1;i<argTypes.length;++i){if(argTypes[i]!==null&&argTypes[i].destructorFunction===undefined){return true}}return false}function craftInvokerFunction(humanName,argTypes,classType,cppInvokerFunc,cppTargetFunc,isAsync){var argCount=argTypes.length;if(argCount<2){throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");}var isClassMethodFunc=argTypes[1]!==null&&classType!==null;var needsDestructorStack=usesDestructorStack(argTypes);var returns=!argTypes[0].isVoid;var expectedArgCount=argCount-2;var argsWired=new Array(expectedArgCount);var invokerFuncArgs=[];var destructors=[];var invokerFn=function(...args){destructors.length=0;var thisWired;invokerFuncArgs.length=isClassMethodFunc?2:1;invokerFuncArgs[0]=cppTargetFunc;if(isClassMethodFunc){thisWired=argTypes[1].toWireType(destructors,this);invokerFuncArgs[1]=thisWired;}for(var i=0;i<expectedArgCount;++i){argsWired[i]=argTypes[i+2].toWireType(destructors,args[i]);invokerFuncArgs.push(argsWired[i]);}var rv=cppInvokerFunc(...invokerFuncArgs);function onDone(rv){if(needsDestructorStack){runDestructors(destructors);}else {for(var i=isClassMethodFunc?1:2;i<argTypes.length;i++){var param=i===1?thisWired:argsWired[i-2];if(argTypes[i].destructorFunction!==null){argTypes[i].destructorFunction(param);}}}if(returns){return argTypes[0].fromWireType(rv)}}return onDone(rv)};return createNamedFunction(humanName,invokerFn)}var cppTypeToJsType=typeId=>{var type=registeredTypes[typeId];if(type.name==="std::string"||type.name==="std::wstring")return "string";else if(type.name==="bool")return "boolean";else if(["char","signed char","unsigned char","short","unsigned short","int","unsigned int","long","unsigned long","float","double","int64_t","uint64_t"].includes(type.name))return "number";return typeId};var __embind_register_class_constructor=(rawClassType,argCount,rawArgTypesAddr,invokerSignature,invoker,rawConstructor)=>{var rawArgTypes=heap32VectorToArray(argCount,rawArgTypesAddr);invoker=embind__requireFunction(invokerSignature,invoker);whenDependentTypesAreResolved([],[rawClassType],classType=>{classType=classType[0];var humanName=`constructor ${classType.name}`;if(undefined===classType.registeredClass.constructor_body){classType.registeredClass.constructor_body=[];}var rawSignatureArray=rawArgTypes.slice(1);var rawSignatureString=rawSignatureArray.join(", ");if(undefined!==classType.registeredClass.constructor_body[argCount-1]&&undefined!==classType.registeredClass.constructor_body[argCount-1].signatures[rawSignatureString]){throw new BindingError(`Cannot register multiple constructors with identical javascript types of parameters for class '${classType.name}'!`)}function unboundTypesHandler(){throwUnboundTypeError(`Cannot construct ${classType.name} due to unbound types`,rawArgTypes);}if(undefined===classType.registeredClass.constructor_body[argCount-1]){classType.registeredClass.constructor_body[argCount-1]={func:unboundTypesHandler,signatures:{},signaturesArray:[]};}else {delete classType.registeredClass.constructor_body[argCount-1].func;}classType.registeredClass.constructor_body[argCount-1].signatures[rawSignatureString]=unboundTypesHandler;whenDependentTypesAreResolved([],rawArgTypes,argTypes=>{argTypes.splice(1,0,null);delete classType.registeredClass.constructor_body[argCount-1].signatures[rawSignatureString];var func=craftInvokerFunction(humanName,argTypes,null,invoker,rawConstructor);var signatureArray=rawSignatureArray.map(a=>cppTypeToJsType(a));var signatureString=signatureArray.join(", ");if(undefined!==classType.registeredClass.constructor_body[argCount-1].func){classType.registeredClass.constructor_body[argCount-1].func=func;}classType.registeredClass.constructor_body[argCount-1].signatures[signatureString]=func;classType.registeredClass.constructor_body[argCount-1].signaturesArray.push(signatureArray);return []});return []});};var getFunctionName=signature=>{signature=signature.trim();const argsIndex=signature.indexOf("(");if(argsIndex===-1)return signature;return signature.slice(0,argsIndex)};var __embind_register_class_function=(rawClassType,methodName,argCount,rawArgTypesAddr,invokerSignature,rawInvoker,context,isPureVirtual,isAsync,isNonnullReturn)=>{var rawArgTypes=heap32VectorToArray(argCount,rawArgTypesAddr);methodName=AsciiToString(methodName);methodName=getFunctionName(methodName);rawInvoker=embind__requireFunction(invokerSignature,rawInvoker,isAsync);whenDependentTypesAreResolved([],[rawClassType],classType=>{classType=classType[0];var humanName=`${classType.name}.${methodName}`;if(methodName.startsWith("@@")){methodName=Symbol[methodName.substring(2)];}if(isPureVirtual){classType.registeredClass.pureVirtualFunctions.push(methodName);}function unboundTypesHandler(){throwUnboundTypeError(`Cannot call ${humanName} due to unbound types`,rawArgTypes);}var proto=classType.registeredClass.instancePrototype;var method=proto[methodName];var rawSignatureArray=rawArgTypes.slice(2);var rawSignatureString=rawSignatureArray.join(", ");if(undefined===method||undefined===method.overloadTable&&method.className!==classType.name&&method.signature===rawSignatureString){unboundTypesHandler.argCount=argCount-2;unboundTypesHandler.signature=rawSignatureString;unboundTypesHandler.className=classType.name;proto[methodName]=unboundTypesHandler;}else if(undefined===proto[methodName].overloadTable&&proto[methodName].argCount!==argCount-2||undefined!==proto[methodName].overloadTable&&undefined===proto[methodName].overloadTable[argCount-2]){ensureOverloadTable(proto,methodName,humanName);unboundTypesHandler.signature=rawSignatureString;proto[methodName].overloadTable[argCount-2]=unboundTypesHandler;}else {ensureOverloadSignatureTable(proto,methodName,humanName,argCount-2);proto[methodName].overloadTable[argCount-2].signatures[rawSignatureString]=unboundTypesHandler;}whenDependentTypesAreResolved([],rawArgTypes,argTypes=>{var memberFunction=craftInvokerFunction(humanName,argTypes,classType,rawInvoker,context);var signatureArray=rawSignatureArray.map(a=>cppTypeToJsType(a));var signatureString=signatureArray.join(", ");if(undefined===proto[methodName].overloadTable){memberFunction.argCount=argCount-2;memberFunction.signature=signatureString;proto[methodName]=memberFunction;}else if(undefined===proto[methodName].overloadTable[argCount-2].signatures){memberFunction.signature=signatureString;proto[methodName].overloadTable[argCount-2]=memberFunction;}else {delete proto[methodName].overloadTable[argCount-2].signatures[rawSignatureString];proto[methodName].overloadTable[argCount-2].signatures[signatureString]=memberFunction;proto[methodName].overloadTable[argCount-2].signaturesArray.push(signatureArray);}return []});return []});};var emval_freelist=[];var emval_handles=[0,1,,1,null,1,true,1,false,1];var __emval_decref=handle=>{if(handle>9&&0===--emval_handles[handle+1]){emval_handles[handle]=undefined;emval_freelist.push(handle);}};var Emval={toValue:handle=>{if(!handle){throwBindingError(`Cannot use deleted val. handle = ${handle}`);}return emval_handles[handle]},toHandle:value=>{switch(value){case undefined:return 2;case null:return 4;case true:return 6;case false:return 8;default:{const handle=emval_freelist.pop()||emval_handles.length;emval_handles[handle]=value;emval_handles[handle+1]=1;return handle}}}};var EmValType={name:"emscripten::val",fromWireType:handle=>{var rv=Emval.toValue(handle);__emval_decref(handle);return rv},toWireType:(destructors,value)=>Emval.toHandle(value),readValueFromPointer:readPointer,destructorFunction:null};var __embind_register_emval=rawType=>registerType(rawType,EmValType);var floatReadValueFromPointer=(name,width)=>{switch(width){case 4:return function(pointer){return this.fromWireType(HEAPF32[pointer>>2])};case 8:return function(pointer){return this.fromWireType(HEAPF64[pointer>>3])};default:throw new TypeError(`invalid float width (${width}): ${name}`)}};var __embind_register_float=(rawType,name,size)=>{name=AsciiToString(name);registerType(rawType,{name,fromWireType:value=>value,toWireType:(destructors,value)=>value,readValueFromPointer:floatReadValueFromPointer(name,size),destructorFunction:null});};var __embind_register_function=(name,argCount,rawArgTypesAddr,signature,rawInvoker,fn,isAsync,isNonnullReturn)=>{var argTypes=heap32VectorToArray(argCount,rawArgTypesAddr);name=AsciiToString(name);name=getFunctionName(name);rawInvoker=embind__requireFunction(signature,rawInvoker,isAsync);var rawSignatureArray=argTypes.slice(1);var rawSignatureString=rawSignatureArray.join(", ");exposePublicSymbol(name,function(){throwUnboundTypeError(`Cannot call ${name} due to unbound types`,argTypes);},argCount-1,rawSignatureString);whenDependentTypesAreResolved([],argTypes,argTypes=>{var invokerArgsArray=[argTypes[0],null].concat(argTypes.slice(1));var signatureArray=rawSignatureArray.map(a=>cppTypeToJsType(a));replacePublicSymbol(name,craftInvokerFunction(name,invokerArgsArray,null,rawInvoker,fn),argCount-1,signatureArray,rawSignatureString);return []});};var __embind_register_integer=(primitiveType,name,size,minRange,maxRange)=>{name=AsciiToString(name);const isUnsignedType=minRange===0;let fromWireType=value=>value;if(isUnsignedType){var bitshift=32-8*size;fromWireType=value=>value<<bitshift>>>bitshift;maxRange=fromWireType(maxRange);}registerType(primitiveType,{name,fromWireType,toWireType:(destructors,value)=>value,readValueFromPointer:integerReadValueFromPointer(name,size,minRange!==0),destructorFunction:null});};var installIndexedIterator=(proto,sizeMethodName,getMethodName)=>{const makeIterator=(size,getValue)=>{let index=0;return {next(){if(index>=size){return {done:true}}const current=index;index++;const value=getValue(current);return {value,done:false}},[Symbol.iterator](){return this}}};if(!proto[Symbol.iterator]){proto[Symbol.iterator]=function(){const size=this[sizeMethodName]();return makeIterator(size,i=>this[getMethodName](i))};}};var __embind_register_iterable=(rawClassType,rawElementType,sizeMethodName,getMethodName)=>{sizeMethodName=AsciiToString(sizeMethodName);getMethodName=AsciiToString(getMethodName);whenDependentTypesAreResolved([],[rawClassType,rawElementType],types=>{const classType=types[0];installIndexedIterator(classType.registeredClass.instancePrototype,sizeMethodName,getMethodName);return []});};var __embind_register_memory_view=(rawType,dataTypeIndex,name)=>{var typeMapping=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array];var TA=typeMapping[dataTypeIndex];function decodeMemoryView(handle){var size=HEAPU32[handle>>2];var data=HEAPU32[handle+4>>2];return new TA(HEAP8.buffer,data,size)}name=AsciiToString(name);registerType(rawType,{name,fromWireType:decodeMemoryView,readValueFromPointer:decodeMemoryView},{ignoreDuplicateRegistrations:true});};var EmValOptionalType=Object.assign({optional:true},EmValType);var __embind_register_optional=(rawOptionalType,rawType)=>{registerType(rawOptionalType,EmValOptionalType);};var stringToUTF8Array=(str,heap,outIdx,maxBytesToWrite)=>{if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.codePointAt(i);if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u;}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63;}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63;}else {if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63;i++;}}heap[outIdx]=0;return outIdx-startIdx};var stringToUTF8=(str,outPtr,maxBytesToWrite)=>stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite);var lengthBytesUTF8=str=>{var len=0;for(var i=0;i<str.length;++i){var c=str.charCodeAt(i);if(c<=127){len++;}else if(c<=2047){len+=2;}else if(c>=55296&&c<=57343){len+=4;++i;}else {len+=3;}}return len};var UTF8Decoder=globalThis.TextDecoder&&new TextDecoder;var findStringEnd=(heapOrArray,idx,maxBytesToRead,ignoreNul)=>{var maxIdx=idx+maxBytesToRead;if(ignoreNul)return maxIdx;while(heapOrArray[idx]&&!(idx>=maxIdx))++idx;return idx};var UTF8ArrayToString=(heapOrArray,idx=0,maxBytesToRead,ignoreNul)=>{var endPtr=findStringEnd(heapOrArray,idx,maxBytesToRead,ignoreNul);if(endPtr-idx>16&&heapOrArray.buffer&&UTF8Decoder){return UTF8Decoder.decode(heapOrArray.subarray(idx,endPtr))}var str="";while(idx<endPtr){var u0=heapOrArray[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heapOrArray[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heapOrArray[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2;}else {u0=(u0&7)<<18|u1<<12|u2<<6|heapOrArray[idx++]&63;}if(u0<65536){str+=String.fromCharCode(u0);}else {var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023);}}return str};var UTF8ToString=(ptr,maxBytesToRead,ignoreNul)=>ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead,ignoreNul):"";var __embind_register_std_string=(rawType,name)=>{name=AsciiToString(name);registerType(rawType,{name,fromWireType(value){var length=HEAPU32[value>>2];var payload=value+4;var str;{str=UTF8ToString(payload,length,true);}_free(value);return str},toWireType(destructors,value){if(value instanceof ArrayBuffer){value=new Uint8Array(value);}var length;var valueIsOfTypeString=typeof value=="string";if(!(valueIsOfTypeString||ArrayBuffer.isView(value)&&value.BYTES_PER_ELEMENT==1)){throwBindingError("Cannot pass non-string to std::string");}if(valueIsOfTypeString){length=lengthBytesUTF8(value);}else {length=value.length;}var base=_malloc(4+length+1);var ptr=base+4;HEAPU32[base>>2]=length;if(valueIsOfTypeString){{stringToUTF8(value,ptr,length+1);}}else {HEAPU8.set(value,ptr);}if(destructors!==null){destructors.push(_free,base);}return base},readValueFromPointer:readPointer,destructorFunction(ptr){_free(ptr);}});};var UTF16Decoder=globalThis.TextDecoder?new TextDecoder("utf-16le"):undefined;var UTF16ToString=(ptr,maxBytesToRead,ignoreNul)=>{var idx=ptr>>1;var endIdx=findStringEnd(HEAPU16,idx,maxBytesToRead/2,ignoreNul);if(endIdx-idx>16&&UTF16Decoder)return UTF16Decoder.decode(HEAPU16.subarray(idx,endIdx));var str="";for(var i=idx;i<endIdx;++i){var codeUnit=HEAPU16[i];str+=String.fromCharCode(codeUnit);}return str};var stringToUTF16=(str,outPtr,maxBytesToWrite)=>{maxBytesToWrite??=2147483647;if(maxBytesToWrite<2)return 0;maxBytesToWrite-=2;var startPtr=outPtr;var numCharsToWrite=maxBytesToWrite<str.length*2?maxBytesToWrite/2:str.length;for(var i=0;i<numCharsToWrite;++i){var codeUnit=str.charCodeAt(i);HEAP16[outPtr>>1]=codeUnit;outPtr+=2;}HEAP16[outPtr>>1]=0;return outPtr-startPtr};var lengthBytesUTF16=str=>str.length*2;var UTF32ToString=(ptr,maxBytesToRead,ignoreNul)=>{var str="";var startIdx=ptr>>2;for(var i=0;!(i>=maxBytesToRead/4);i++){var utf32=HEAPU32[startIdx+i];if(!utf32&&!ignoreNul)break;str+=String.fromCodePoint(utf32);}return str};var stringToUTF32=(str,outPtr,maxBytesToWrite)=>{maxBytesToWrite??=2147483647;if(maxBytesToWrite<4)return 0;var startPtr=outPtr;var endPtr=startPtr+maxBytesToWrite-4;for(var i=0;i<str.length;++i){var codePoint=str.codePointAt(i);if(codePoint>65535){i++;}HEAP32[outPtr>>2]=codePoint;outPtr+=4;if(outPtr+4>endPtr)break}HEAP32[outPtr>>2]=0;return outPtr-startPtr};var lengthBytesUTF32=str=>{var len=0;for(var i=0;i<str.length;++i){var codePoint=str.codePointAt(i);if(codePoint>65535){i++;}len+=4;}return len};var __embind_register_std_wstring=(rawType,charSize,name)=>{name=AsciiToString(name);var decodeString,encodeString,lengthBytesUTF;if(charSize===2){decodeString=UTF16ToString;encodeString=stringToUTF16;lengthBytesUTF=lengthBytesUTF16;}else {decodeString=UTF32ToString;encodeString=stringToUTF32;lengthBytesUTF=lengthBytesUTF32;}registerType(rawType,{name,fromWireType:value=>{var length=HEAPU32[value>>2];var str=decodeString(value+4,length*charSize,true);_free(value);return str},toWireType:(destructors,value)=>{if(!(typeof value=="string")){throwBindingError(`Cannot pass non-string to C++ string type ${name}`);}var length=lengthBytesUTF(value);var ptr=_malloc(4+length+charSize);HEAPU32[ptr>>2]=length/charSize;encodeString(value,ptr+4,length+charSize);if(destructors!==null){destructors.push(_free,ptr);}return ptr},readValueFromPointer:readPointer,destructorFunction(ptr){_free(ptr);}});};var __embind_register_void=(rawType,name)=>{name=AsciiToString(name);registerType(rawType,{isVoid:true,name,fromWireType:()=>undefined,toWireType:(destructors,o)=>undefined});};var getExecutableName=()=>thisProgram||"./this.program";var __emscripten_get_progname=(str,len)=>stringToUTF8(getExecutableName(),str,len);var runtimeKeepaliveCounter=0;var __emscripten_runtime_keepalive_clear=()=>{noExitRuntime=false;runtimeKeepaliveCounter=0;};var emval_methodCallers=[];var emval_addMethodCaller=caller=>{var id=emval_methodCallers.length;emval_methodCallers.push(caller);return id};var requireRegisteredType=(rawType,humanName)=>{var impl=registeredTypes[rawType];if(undefined===impl){throwBindingError(`${humanName} has unknown type ${getTypeName(rawType)}`);}return impl};var emval_lookupTypes=(argCount,argTypes)=>{var a=new Array(argCount);for(var i=0;i<argCount;++i){a[i]=requireRegisteredType(HEAPU32[argTypes+i*4>>2],`parameter ${i}`);}return a};var emval_returnValue=(toReturnWire,destructorsRef,handle)=>{var destructors=[];var result=toReturnWire(destructors,handle);if(destructors.length){HEAPU32[destructorsRef>>2]=Emval.toHandle(destructors);}return result};var emval_symbols={};var getStringOrSymbol=address=>{var symbol=emval_symbols[address];if(symbol===undefined){return AsciiToString(address)}return symbol};var __emval_create_invoker=(argCount,argTypesPtr,kind)=>{var GenericWireTypeSize=8;var[retType,...argTypes]=emval_lookupTypes(argCount,argTypesPtr);var toReturnWire=retType.toWireType.bind(retType);var argFromPtr=argTypes.map(type=>type.readValueFromPointer.bind(type));argCount--;var argN=new Array(argCount);var invokerFunction=(handle,methodName,destructorsRef,args)=>{var offset=0;for(var i=0;i<argCount;++i){argN[i]=argFromPtr[i](args+offset);offset+=GenericWireTypeSize;}var rv;switch(kind){case 0:rv=Emval.toValue(handle).apply(null,argN);break;case 2:rv=Reflect.construct(Emval.toValue(handle),argN);break;case 3:rv=argN[0];break;case 1:rv=Emval.toValue(handle)[getStringOrSymbol(methodName)](...argN);break}return emval_returnValue(toReturnWire,destructorsRef,rv)};var functionName=`methodCaller<(${argTypes.map(t=>t.name)}) => ${retType.name}>`;return emval_addMethodCaller(createNamedFunction(functionName,invokerFunction))};var __emval_invoke=(caller,handle,methodName,destructorsRef,args)=>emval_methodCallers[caller](handle,methodName,destructorsRef,args);var __emval_run_destructors=handle=>{var destructors=Emval.toValue(handle);runDestructors(destructors);__emval_decref(handle);};var timers={};var handleException=e=>{if(e instanceof ExitStatus||e=="unwind"){return EXITSTATUS}quit_(1,e);};var keepRuntimeAlive=()=>noExitRuntime||runtimeKeepaliveCounter>0;var _proc_exit=code=>{EXITSTATUS=code;if(!keepRuntimeAlive()){Module["onExit"]?.(code);ABORT=true;}quit_(code,new ExitStatus(code));};var exitJS=(status,implicit)=>{EXITSTATUS=status;_proc_exit(status);};var _exit=exitJS;var maybeExit=()=>{if(!keepRuntimeAlive()){try{_exit(EXITSTATUS);}catch(e){handleException(e);}}};var callUserCallback=func=>{if(ABORT){return}try{return func()}catch(e){handleException(e);}finally{maybeExit();}};var _emscripten_get_now=()=>performance.now();var __setitimer_js=(which,timeout_ms)=>{if(timers[which]){clearTimeout(timers[which].id);delete timers[which];}if(!timeout_ms)return 0;var id=setTimeout(()=>{delete timers[which];callUserCallback(()=>__emscripten_timeout(which,_emscripten_get_now()));},timeout_ms);timers[which]={id,timeout_ms};return 0};var __tzset_js=(timezone,daylight,std_name,dst_name)=>{var currentYear=(new Date).getFullYear();var winter=new Date(currentYear,0,1);var summer=new Date(currentYear,6,1);var winterOffset=winter.getTimezoneOffset();var summerOffset=summer.getTimezoneOffset();var stdTimezoneOffset=Math.max(winterOffset,summerOffset);HEAPU32[timezone>>2]=stdTimezoneOffset*60;HEAP32[daylight>>2]=Number(winterOffset!=summerOffset);var extractZone=timezoneOffset=>{var sign=timezoneOffset>=0?"-":"+";var absOffset=Math.abs(timezoneOffset);var hours=String(Math.floor(absOffset/60)).padStart(2,"0");var minutes=String(absOffset%60).padStart(2,"0");return `UTC${sign}${hours}${minutes}`};var winterName=extractZone(winterOffset);var summerName=extractZone(summerOffset);if(summerOffset<winterOffset){stringToUTF8(winterName,std_name,17);stringToUTF8(summerName,dst_name,17);}else {stringToUTF8(winterName,dst_name,17);stringToUTF8(summerName,std_name,17);}};var __wasmfs_copy_preloaded_file_data=(index,buffer)=>HEAPU8.set(wasmFSPreloadedFiles[index].fileData,buffer);var wasmFSPreloadedDirs=[];var __wasmfs_get_num_preloaded_dirs=()=>wasmFSPreloadedDirs.length;var wasmFSPreloadedFiles=[];var wasmFSPreloadingFlushed=false;var __wasmfs_get_num_preloaded_files=()=>{wasmFSPreloadingFlushed=true;return wasmFSPreloadedFiles.length};var __wasmfs_get_preloaded_child_path=(index,childNameBuffer)=>{var s=wasmFSPreloadedDirs[index].childName;var len=lengthBytesUTF8(s)+1;stringToUTF8(s,childNameBuffer,len);};var __wasmfs_get_preloaded_file_mode=index=>wasmFSPreloadedFiles[index].mode;var __wasmfs_get_preloaded_file_size=index=>wasmFSPreloadedFiles[index].fileData.length;var __wasmfs_get_preloaded_parent_path=(index,parentPathBuffer)=>{var s=wasmFSPreloadedDirs[index].parentPath;var len=lengthBytesUTF8(s)+1;stringToUTF8(s,parentPathBuffer,len);};var __wasmfs_get_preloaded_path_name=(index,fileNameBuffer)=>{var s=wasmFSPreloadedFiles[index].pathName;var len=lengthBytesUTF8(s)+1;stringToUTF8(s,fileNameBuffer,len);};var __wasmfs_jsimpl_alloc_file=(backend,file)=>wasmFS$backends[backend].allocFile(file);var __wasmfs_jsimpl_free_file=(backend,file)=>wasmFS$backends[backend].freeFile(file);var __wasmfs_jsimpl_get_size=(backend,file)=>wasmFS$backends[backend].getSize(file);var INT53_MAX=9007199254740992;var INT53_MIN=-9007199254740992;var bigintToI53Checked=num=>num<INT53_MIN||num>INT53_MAX?NaN:Number(num);function __wasmfs_jsimpl_read(backend,file,buffer,length,offset){offset=bigintToI53Checked(offset);if(!wasmFS$backends[backend].read){return  -28}return wasmFS$backends[backend].read(file,buffer,length,offset)}function __wasmfs_jsimpl_set_size(backend,file,size){size=bigintToI53Checked(size);return wasmFS$backends[backend].setSize(file,size)}function __wasmfs_jsimpl_write(backend,file,buffer,length,offset){offset=bigintToI53Checked(offset);if(!wasmFS$backends[backend].write){return  -28}return wasmFS$backends[backend].write(file,buffer,length,offset)}class HandleAllocator{allocated=[undefined];freelist=[];get(id){return this.allocated[id]}has(id){return this.allocated[id]!==undefined}allocate(handle){var id=this.freelist.pop()||this.allocated.length;this.allocated[id]=handle;return id}free(id){this.allocated[id]=undefined;this.freelist.push(id);}}var wasmfsOPFSAccessHandles=new HandleAllocator;var __wasmfs_opfs_close_access=async(ctx,accessID,errPtr)=>{let accessHandle=wasmfsOPFSAccessHandles.get(accessID);try{await accessHandle.close();}catch{let err=-29;HEAP32[errPtr>>2]=err;}wasmfsOPFSAccessHandles.free(accessID);};var wasmfsOPFSBlobs=new HandleAllocator;var __wasmfs_opfs_close_blob=blobID=>{wasmfsOPFSBlobs.free(blobID);};var __wasmfs_opfs_flush_access=async(ctx,accessID,errPtr)=>{let accessHandle=wasmfsOPFSAccessHandles.get(accessID);try{await accessHandle.flush();}catch{let err=-29;HEAP32[errPtr>>2]=err;}};var wasmfsOPFSDirectoryHandles=new HandleAllocator;var __wasmfs_opfs_free_directory=dirID=>{wasmfsOPFSDirectoryHandles.free(dirID);};var wasmfsOPFSFileHandles=new HandleAllocator;var __wasmfs_opfs_free_file=fileID=>{wasmfsOPFSFileHandles.free(fileID);};var wasmfsOPFSGetOrCreateFile=async(parent,name,create)=>{let parentHandle=wasmfsOPFSDirectoryHandles.get(parent);let fileHandle;try{fileHandle=await parentHandle.getFileHandle(name,{create});}catch(e){if(e.name==="NotFoundError"){return  -20}if(e.name==="TypeMismatchError"){return  -31}return  -29}return wasmfsOPFSFileHandles.allocate(fileHandle)};var wasmfsOPFSGetOrCreateDir=async(parent,name,create)=>{let parentHandle=wasmfsOPFSDirectoryHandles.get(parent);let childHandle;try{childHandle=await parentHandle.getDirectoryHandle(name,{create});}catch(e){if(e.name==="NotFoundError"){return  -20}if(e.name==="TypeMismatchError"){return  -54}return  -29}return wasmfsOPFSDirectoryHandles.allocate(childHandle)};var __wasmfs_opfs_get_child=async(ctx,parent,namePtr,childTypePtr,childIDPtr)=>{let name=UTF8ToString(namePtr);let childType=1;let childID=await wasmfsOPFSGetOrCreateFile(parent,name,false);if(childID==-31){childType=2;childID=await wasmfsOPFSGetOrCreateDir(parent,name,false);}HEAP32[childTypePtr>>2]=childType;HEAP32[childIDPtr>>2]=childID;};var stackSave=()=>_emscripten_stack_get_current();var stackRestore=val=>__emscripten_stack_restore(val);var __wasmfs_opfs_get_entries=async(ctx,dirID,entriesPtr,errPtr)=>{let dirHandle=wasmfsOPFSDirectoryHandles.get(dirID);try{let iter=dirHandle.entries();for(let entry;entry=await iter.next(),!entry.done;){let[name,child]=entry.value;let sp=stackSave();let namePtr=stringToUTF8OnStack(name);let type=child.kind=="file"?1:2;__wasmfs_opfs_record_entry(entriesPtr,namePtr,type);stackRestore(sp);}}catch{let err=-29;HEAP32[errPtr>>2]=err;}};var __wasmfs_opfs_get_size_access=async(ctx,accessID,sizePtr)=>{let accessHandle=wasmfsOPFSAccessHandles.get(accessID);let size;try{size=await accessHandle.getSize();}catch{size=-29;}HEAP64[sizePtr>>3]=BigInt(size);};var __wasmfs_opfs_get_size_blob=function(blobID){var ret=(()=>wasmfsOPFSBlobs.get(blobID).size)();return BigInt(ret)};var __wasmfs_opfs_get_size_file=async(ctx,fileID,sizePtr)=>{let fileHandle=wasmfsOPFSFileHandles.get(fileID);let size;try{size=(await fileHandle.getFile()).size;}catch{size=-29;}HEAP64[sizePtr>>3]=BigInt(size);};var __wasmfs_opfs_init_root_directory=async ctx=>{if(wasmfsOPFSDirectoryHandles.allocated.length==1){let root=await navigator.storage.getDirectory();wasmfsOPFSDirectoryHandles.allocated.push(root);}};var __wasmfs_opfs_insert_directory=async(ctx,parent,namePtr,childIDPtr)=>{let name=UTF8ToString(namePtr);let childID=await wasmfsOPFSGetOrCreateDir(parent,name,true);HEAP32[childIDPtr>>2]=childID;};var __wasmfs_opfs_insert_file=async(ctx,parent,namePtr,childIDPtr)=>{let name=UTF8ToString(namePtr);let childID=await wasmfsOPFSGetOrCreateFile(parent,name,true);HEAP32[childIDPtr>>2]=childID;};var __wasmfs_opfs_move_file=async(ctx,fileID,newParentID,namePtr,errPtr)=>{let name=UTF8ToString(namePtr);let fileHandle=wasmfsOPFSFileHandles.get(fileID);let newDirHandle=wasmfsOPFSDirectoryHandles.get(newParentID);try{await fileHandle.move(newDirHandle,name);}catch{let err=-29;HEAP32[errPtr>>2]=err;}};class FileSystemAsyncAccessHandle{constructor(handle){this.handle=handle;}async close(){}async flush(){}async getSize(){let file=await this.handle.getFile();return file.size}async read(buffer,options={at:0}){let file=await this.handle.getFile();let slice=await file.slice(options.at,options.at+buffer.length);let fileBuffer=await slice.arrayBuffer();let array=new Uint8Array(fileBuffer);buffer.set(array);return array.length}async write(buffer,options={at:0}){let writable=await this.handle.createWritable({keepExistingData:true});await writable.write({type:"write",position:options.at,data:buffer});await writable.close();return buffer.length}async truncate(size){let writable=await this.handle.createWritable({keepExistingData:true});await writable.truncate(size);await writable.close();}}var wasmfsOPFSCreateAsyncAccessHandle=fileHandle=>new FileSystemAsyncAccessHandle(fileHandle);var __wasmfs_opfs_open_access=async(ctx,fileID,accessIDPtr)=>{let fileHandle=wasmfsOPFSFileHandles.get(fileID);let accessID;try{let accessHandle;accessHandle=await wasmfsOPFSCreateAsyncAccessHandle(fileHandle);accessID=wasmfsOPFSAccessHandles.allocate(accessHandle);}catch(e){if(e.name==="InvalidStateError"||e.name==="NoModificationAllowedError"){accessID=-2;}else {accessID=-29;}}HEAP32[accessIDPtr>>2]=accessID;};var __wasmfs_opfs_open_blob=async(ctx,fileID,blobIDPtr)=>{let fileHandle=wasmfsOPFSFileHandles.get(fileID);let blobID;try{let blob=await fileHandle.getFile();blobID=wasmfsOPFSBlobs.allocate(blob);}catch(e){if(e.name==="NotAllowedError"){blobID=-2;}else {blobID=-29;}}HEAP32[blobIDPtr>>2]=blobID;};async function __wasmfs_opfs_read_access(accessID,bufPtr,len,pos){pos=bigintToI53Checked(pos);let accessHandle=wasmfsOPFSAccessHandles.get(accessID);let data=HEAPU8.subarray(bufPtr,bufPtr+len);try{return await accessHandle.read(data,{at:pos})}catch(e){if(e.name=="TypeError"){return  -28}return  -29}}async function __wasmfs_opfs_read_blob(ctx,blobID,bufPtr,len,pos,nreadPtr){pos=bigintToI53Checked(pos);let blob=wasmfsOPFSBlobs.get(blobID);let slice=blob.slice(pos,pos+len);let nread=0;try{let buf=await slice.arrayBuffer();let data=new Uint8Array(buf);HEAPU8.set(data,bufPtr);nread+=data.length;}catch(e){if(e instanceof RangeError){nread=-21;}else {nread=-29;}}HEAP32[nreadPtr>>2]=nread;}var __wasmfs_opfs_remove_child=async(ctx,dirID,namePtr,errPtr)=>{let name=UTF8ToString(namePtr);let dirHandle=wasmfsOPFSDirectoryHandles.get(dirID);try{await dirHandle.removeEntry(name);}catch{let err=-29;HEAP32[errPtr>>2]=err;}};async function __wasmfs_opfs_set_size_access(ctx,accessID,size,errPtr){size=bigintToI53Checked(size);let accessHandle=wasmfsOPFSAccessHandles.get(accessID);try{await accessHandle.truncate(size);}catch{let err=-29;HEAP32[errPtr>>2]=err;}}async function __wasmfs_opfs_set_size_file(ctx,fileID,size,errPtr){size=bigintToI53Checked(size);let fileHandle=wasmfsOPFSFileHandles.get(fileID);try{let writable=await fileHandle.createWritable({keepExistingData:true});await writable.truncate(size);await writable.close();}catch{let err=-29;HEAP32[errPtr>>2]=err;}}async function __wasmfs_opfs_write_access(accessID,bufPtr,len,pos){pos=bigintToI53Checked(pos);let accessHandle=wasmfsOPFSAccessHandles.get(accessID);let data=HEAPU8.subarray(bufPtr,bufPtr+len);try{return await accessHandle.write(data,{at:pos})}catch(e){if(e.name=="TypeError"){return  -28}return  -29}}var FS_stdin_getChar_buffer=[];var intArrayFromString=(stringy,dontAddNull,length)=>{var len=lengthBytesUTF8(stringy)+1;var u8array=new Array(len);var numBytesWritten=stringToUTF8Array(stringy,u8array,0,u8array.length);u8array.length=numBytesWritten;return u8array};var FS_stdin_getChar=()=>{if(!FS_stdin_getChar_buffer.length){var result=null;if(globalThis.window?.prompt){result=window.prompt("Input: ");if(result!==null){result+="\n";}}if(!result){return null}FS_stdin_getChar_buffer=intArrayFromString(result);}return FS_stdin_getChar_buffer.shift()};var __wasmfs_stdin_get_char=()=>{var c=FS_stdin_getChar();if(typeof c==="number"){return c}return  -1};var _emscripten_date_now=()=>Date.now();var _emscripten_err=str=>err(UTF8ToString(str));var _emscripten_out=str=>out(UTF8ToString(str));var getHeapMax=()=>2147483648;var alignMemory=(size,alignment)=>Math.ceil(size/alignment)*alignment;var growMemory=size=>{var oldHeapSize=wasmMemory.buffer.byteLength;var pages=(size-oldHeapSize+65535)/65536|0;try{wasmMemory.grow(pages);updateMemoryViews();return 1}catch(e){}};var _emscripten_resize_heap=requestedSize=>{var oldSize=HEAPU8.length;requestedSize>>>=0;var maxHeapSize=getHeapMax();if(requestedSize>maxHeapSize){return false}for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignMemory(Math.max(requestedSize,overGrownHeapSize),65536));var replacement=growMemory(newSize);if(replacement){return true}}return false};var ENV={};var getEnvStrings=()=>{if(!getEnvStrings.strings){var lang=(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8";var env={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:lang,_:getExecutableName()};for(var x in ENV){if(ENV[x]===undefined)delete env[x];else env[x]=ENV[x];}var strings=[];for(var x in env){strings.push(`${x}=${env[x]}`);}getEnvStrings.strings=strings;}return getEnvStrings.strings};var _environ_get=(__environ,environ_buf)=>{var bufSize=0;var envp=0;for(var string of getEnvStrings()){var ptr=environ_buf+bufSize;HEAPU32[__environ+envp>>2]=ptr;bufSize+=stringToUTF8(string,ptr,Infinity)+1;envp+=4;}return 0};var _environ_sizes_get=(penviron_count,penviron_buf_size)=>{var strings=getEnvStrings();HEAPU32[penviron_count>>2]=strings.length;var bufSize=0;for(var string of strings){bufSize+=lengthBytesUTF8(string)+1;}HEAPU32[penviron_buf_size>>2]=bufSize;return 0};var initRandomFill=()=>view=>crypto.getRandomValues(view);var randomFill=view=>{(randomFill=initRandomFill())(view);};var _random_get=(buffer,size)=>{randomFill(HEAPU8.subarray(buffer,buffer+size));return 0};var PATH={isAbs:path=>path.charAt(0)==="/",splitPath:filename=>{var splitPathRe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return splitPathRe.exec(filename).slice(1)},normalizeArray:(parts,allowAboveRoot)=>{var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==="."){parts.splice(i,1);}else if(last===".."){parts.splice(i,1);up++;}else if(up){parts.splice(i,1);up--;}}if(allowAboveRoot){for(;up;up--){parts.unshift("..");}}return parts},normalize:path=>{var isAbsolute=PATH.isAbs(path),trailingSlash=path.slice(-1)==="/";path=PATH.normalizeArray(path.split("/").filter(p=>!!p),!isAbsolute).join("/");if(!path&&!isAbsolute){path=".";}if(path&&trailingSlash){path+="/";}return (isAbsolute?"/":"")+path},dirname:path=>{var result=PATH.splitPath(path),root=result[0],dir=result[1];if(!root&&!dir){return "."}if(dir){dir=dir.slice(0,-1);}return root+dir},basename:path=>path&&path.match(/([^\/]+|\/)\/*$/)[1],join:(...paths)=>PATH.normalize(paths.join("/")),join2:(l,r)=>PATH.normalize(l+"/"+r)};var stackAlloc=sz=>__emscripten_stack_alloc(sz);var stringToUTF8OnStack=str=>{var size=lengthBytesUTF8(str)+1;var ret=stackAlloc(size);stringToUTF8(str,ret,size);return ret};var withStackSave=f=>{var stack=stackSave();var ret=f();stackRestore(stack);return ret};var readI53FromI64=ptr=>HEAPU32[ptr>>2]+HEAP32[ptr+4>>2]*4294967296;var readI53FromU64=ptr=>HEAPU32[ptr>>2]+HEAPU32[ptr+4>>2]*4294967296;var FS_mknod=(path,mode,dev)=>FS.handleError(withStackSave(()=>{var pathBuffer=stringToUTF8OnStack(path);return __wasmfs_mknod(pathBuffer,mode,dev)}));var FS_create=(path,mode=438)=>{mode&=4095;mode|=32768;return FS_mknod(path,mode,0)};var FS_fileDataToTypedArray=data=>{if(typeof data=="string"){data=intArrayFromString(data);}if(!data.subarray){data=new Uint8Array(data);}return data};var FS_writeFile=(path,data)=>{var sp=stackSave();var pathBuffer=stringToUTF8OnStack(path);data=FS_fileDataToTypedArray(data);var len=data.length;var dataBuffer=_malloc(len);HEAPU8.set(data,dataBuffer);var ret=__wasmfs_write_file(pathBuffer,dataBuffer,len);_free(dataBuffer);stackRestore(sp);return ret};var FS_createDataFile=(parent,name,fileData,canRead,canWrite,canOwn)=>{var pathName=name?parent+"/"+name:parent;var mode=FS_getMode(canRead,canWrite);if(!wasmFSPreloadingFlushed){wasmFSPreloadedFiles.push({pathName,fileData,mode});}else {FS_create(pathName,mode);FS_writeFile(pathName,fileData);}};var asyncLoad=async url=>{var arrayBuffer=await readAsync(url);return new Uint8Array(arrayBuffer)};var PATH_FS={resolve:(...args)=>{var resolvedPath="",resolvedAbsolute=false;for(var i=args.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?args[i]:FS.cwd();if(typeof path!="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!path){return ""}resolvedPath=path+"/"+resolvedPath;resolvedAbsolute=PATH.isAbs(path);}resolvedPath=PATH.normalizeArray(resolvedPath.split("/").filter(p=>!!p),!resolvedAbsolute).join("/");return (resolvedAbsolute?"/":"")+resolvedPath||"."},relative:(from,to)=>{from=PATH_FS.resolve(from).slice(1);to=PATH_FS.resolve(to).slice(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=="")break}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=="")break}if(start>end)return [];return arr.slice(start,end-start+1)}var fromParts=trim(from.split("/"));var toParts=trim(to.split("/"));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push("..");}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join("/")}};var runDependencies=0;var dependenciesFulfilled=null;var removeRunDependency=id=>{runDependencies--;Module["monitorRunDependencies"]?.(runDependencies);if(runDependencies==0){if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback();}}};var addRunDependency=id=>{runDependencies++;Module["monitorRunDependencies"]?.(runDependencies);};var preloadPlugins=[];var FS_handledByPreloadPlugin=async(byteArray,fullname)=>{if(typeof Browser!="undefined")Browser.init();for(var plugin of preloadPlugins){if(plugin["canHandle"](fullname)){return plugin["handle"](byteArray,fullname)}}return byteArray};var FS_preloadFile=async(parent,name,url,canRead,canWrite,dontCreateFile,canOwn,preFinish)=>{var fullname=name?PATH_FS.resolve(PATH.join2(parent,name)):parent;addRunDependency();try{var byteArray=url;if(typeof url=="string"){byteArray=await asyncLoad(url);}byteArray=await FS_handledByPreloadPlugin(byteArray,fullname);preFinish?.();if(!dontCreateFile){FS_createDataFile(parent,name,byteArray,canRead,canWrite,canOwn);}}finally{removeRunDependency();}};var FS_createPreloadedFile=(parent,name,url,canRead,canWrite,onload,onerror,dontCreateFile,canOwn,preFinish)=>{FS_preloadFile(parent,name,url,canRead,canWrite,dontCreateFile,canOwn,preFinish).then(onload).catch(onerror);};var FS_getMode=(canRead,canWrite)=>{var mode=0;if(canRead)mode|=292|73;if(canWrite)mode|=146;return mode};var FS_modeStringToFlags=str=>{if(typeof str!="string")return str;var flagModes={r:0,"r+":2,w:512|64|1,"w+":512|64|2,a:1024|64|1,"a+":1024|64|2};var flags=flagModes[str];if(typeof flags=="undefined"){throw new Error(`Unknown file open mode: ${str}`)}return flags};var FS_mkdir=(path,mode=511)=>FS.handleError(withStackSave(()=>{var buffer=stringToUTF8OnStack(path);return __wasmfs_mkdir(buffer,mode)}));var FS_mkdirTree=(path,mode)=>{var dirs=path.split("/");var d="";for(var dir of dirs){if(!dir)continue;if(d||PATH.isAbs(path))d+="/";d+=dir;try{FS_mkdir(d,mode);}catch(e){if(e.errno!=20)throw e}}};var FS_unlink=path=>withStackSave(()=>{var buffer=stringToUTF8OnStack(path);return __wasmfs_unlink(buffer)});var wasmFS$backends={};var wasmFSDevices={};var wasmFSDeviceStreams={};var FS={ErrnoError:class extends Error{name="ErrnoError";message="FS error";constructor(code){super();this.errno=code;}},handleError(returnValue){if(returnValue<0){throw new FS.ErrnoError(-returnValue)}return returnValue},createDataFile(parent,name,fileData,canRead,canWrite,canOwn){FS_createDataFile(parent,name,fileData,canRead,canWrite);},createPath(parent,path,canRead,canWrite){var parts=path.split("/").reverse();while(parts.length){var part=parts.pop();if(!part)continue;var current=PATH.join2(parent,part);if(!wasmFSPreloadingFlushed){wasmFSPreloadedDirs.push({parentPath:parent,childName:part});}else {try{FS.mkdir(current);}catch(e){if(e.errno!=20)throw e}}parent=current;}return current},createPreloadedFile(parent,name,url,canRead,canWrite,onload,onerror,dontCreateFile,canOwn,preFinish){return FS_createPreloadedFile(parent,name,url,canRead,canWrite,onload,onerror,dontCreateFile,canOwn,preFinish)},async preloadFile(parent,name,url,canRead,canWrite,dontCreateFile,canOwn,preFinish){return FS_preloadFile(parent,name,url,canRead,canWrite,dontCreateFile,canOwn,preFinish)},readFile(path,opts={}){opts.encoding=opts.encoding||"binary";if(opts.encoding!=="utf8"&&opts.encoding!=="binary"){throw new Error(`Invalid encoding type "${opts.encoding}"`)}var buf,length;withStackSave(()=>{var bufPtr=stackAlloc(4);var sizePtr=stackAlloc(4);FS.handleError(-__wasmfs_read_file(stringToUTF8OnStack(path),bufPtr,sizePtr));buf=HEAPU32[bufPtr>>2];length=readI53FromI64(sizePtr);});return opts.encoding==="utf8"?UTF8ToString(buf,length):HEAPU8.slice(buf,buf+length)},cwd:()=>UTF8ToString(__wasmfs_get_cwd()),analyzePath(path){var exists=!!FS.findObject(path);return {exists,object:{contents:exists?FS.readFile(path):null}}},mkdir:(path,mode)=>FS_mkdir(path,mode),mkdirTree:(path,mode)=>FS_mkdirTree(path,mode),rmdir:path=>FS.handleError(withStackSave(()=>__wasmfs_rmdir(stringToUTF8OnStack(path)))),open:(path,flags,mode=438)=>withStackSave(()=>{flags=FS_modeStringToFlags(flags);var buffer=stringToUTF8OnStack(path);var fd=FS.handleError(__wasmfs_open(buffer,flags,mode));return {fd}}),create:(path,mode)=>FS_create(path,mode),close:stream=>FS.handleError(-__wasmfs_close(stream.fd)),unlink:path=>FS_unlink(path),chdir:path=>withStackSave(()=>__wasmfs_chdir(stringToUTF8OnStack(path))),read(stream,buffer,offset,length,position){var seeking=typeof position!="undefined";var dataBuffer=_malloc(length);var bytesRead;if(seeking){bytesRead=__wasmfs_pread(stream.fd,dataBuffer,length,BigInt(position));}else {bytesRead=__wasmfs_read(stream.fd,dataBuffer,length);}if(bytesRead>0){buffer.set(HEAPU8.subarray(dataBuffer,dataBuffer+bytesRead),offset);}_free(dataBuffer);return FS.handleError(bytesRead)},write(stream,buffer,offset,length,position,canOwn){var seeking=typeof position!="undefined";var dataBuffer=_malloc(length);for(var i=0;i<length;i++){HEAP8[dataBuffer+i]=buffer[offset+i];}var bytesRead;if(seeking){bytesRead=__wasmfs_pwrite(stream.fd,dataBuffer,length,BigInt(position));}else {bytesRead=__wasmfs_write(stream.fd,dataBuffer,length);}_free(dataBuffer);return FS.handleError(bytesRead)},writeFile:(path,data)=>FS_writeFile(path,data),mmap:(stream,length,offset,prot,flags)=>{var buf=FS.handleError(__wasmfs_mmap(length,prot,flags,stream.fd,BigInt(offset)));return {ptr:buf,allocated:true}},msync:(stream,bufferPtr,offset,length,mmapFlags)=>FS.handleError(__wasmfs_msync(bufferPtr,length,mmapFlags)),munmap:(addr,length)=>FS.handleError(__wasmfs_munmap(addr,length)),symlink:(target,linkpath)=>withStackSave(()=>__wasmfs_symlink(stringToUTF8OnStack(target),stringToUTF8OnStack(linkpath))),readlink(path){return withStackSave(()=>{var bufPtr=stackAlloc(4);FS.handleError(__wasmfs_readlink(stringToUTF8OnStack(path),bufPtr));var readBuffer=HEAPU32[bufPtr>>2];return UTF8ToString(readBuffer)})},statBufToObject(statBuf){return {dev:HEAPU32[statBuf>>2],mode:HEAPU32[statBuf+4>>2],nlink:HEAPU32[statBuf+8>>2],uid:HEAPU32[statBuf+12>>2],gid:HEAPU32[statBuf+16>>2],rdev:HEAPU32[statBuf+20>>2],size:readI53FromI64(statBuf+24),blksize:HEAP32[statBuf+32>>2],blocks:HEAP32[statBuf+36>>2],atime:readI53FromI64(statBuf+40),mtime:readI53FromI64(statBuf+56),ctime:readI53FromI64(statBuf+72),ino:readI53FromU64(statBuf+88)}},stat(path){return withStackSave(()=>{var statBuf=stackAlloc(96);FS.handleError(__wasmfs_stat(stringToUTF8OnStack(path),statBuf));return FS.statBufToObject(statBuf)})},lstat(path){return withStackSave(()=>{var statBuf=stackAlloc(96);FS.handleError(__wasmfs_lstat(stringToUTF8OnStack(path),statBuf));return FS.statBufToObject(statBuf)})},chmod(path,mode){return FS.handleError(withStackSave(()=>{var buffer=stringToUTF8OnStack(path);return __wasmfs_chmod(buffer,mode)}))},lchmod(path,mode){return FS.handleError(withStackSave(()=>{var buffer=stringToUTF8OnStack(path);return __wasmfs_lchmod(buffer,mode)}))},fchmod(fd,mode){return FS.handleError(__wasmfs_fchmod(fd,mode))},utime:(path,atime,mtime)=>FS.handleError(withStackSave(()=>__wasmfs_utime(stringToUTF8OnStack(path),atime,mtime))),truncate(path,len){return FS.handleError(withStackSave(()=>__wasmfs_truncate(stringToUTF8OnStack(path),BigInt(len))))},ftruncate(fd,len){return FS.handleError(__wasmfs_ftruncate(fd,BigInt(len)))},findObject(path){var result=withStackSave(()=>__wasmfs_identify(stringToUTF8OnStack(path)));if(result==44){return null}return {isFolder:result==31,isDevice:false}},readdir:path=>withStackSave(()=>{var pathBuffer=stringToUTF8OnStack(path);var entries=[];var state=__wasmfs_readdir_start(pathBuffer);if(!state){throw new Error("No such directory")}var entry;while(entry=__wasmfs_readdir_get(state)){entries.push(UTF8ToString(entry));}__wasmfs_readdir_finish(state);return entries}),mount:(type,opts,mountpoint)=>{var backendPointer=type.createBackend(opts);return FS.handleError(withStackSave(()=>__wasmfs_mount(stringToUTF8OnStack(mountpoint),backendPointer)))},unmount:mountpoint=>FS.handleError(withStackSave(()=>_wasmfs_unmount(stringToUTF8OnStack(mountpoint)))),mknod:(path,mode,dev)=>FS_mknod(path,mode,dev),makedev:(ma,mi)=>ma<<8|mi,registerDevice(dev,ops){var backendPointer=_wasmfs_create_jsimpl_backend();var definedOps={userRead:ops.read,userWrite:ops.write,allocFile:file=>{wasmFSDeviceStreams[file]={};},freeFile:file=>{wasmFSDeviceStreams[file]=undefined;},getSize:file=>{},setSize:(file,size)=>0,read:(file,buffer,length,offset)=>{var bufferArray=HEAP8.subarray(buffer,buffer+length);try{var bytesRead=definedOps.userRead(wasmFSDeviceStreams[file],bufferArray,0,length,offset);}catch(e){return -e.errno}HEAP8.set(bufferArray,buffer);return bytesRead},write:(file,buffer,length,offset)=>{var bufferArray=HEAP8.subarray(buffer,buffer+length);try{var bytesWritten=definedOps.userWrite(wasmFSDeviceStreams[file],bufferArray,0,length,offset);}catch(e){return -e.errno}HEAP8.set(bufferArray,buffer);return bytesWritten}};wasmFS$backends[backendPointer]=definedOps;wasmFSDevices[dev]=backendPointer;},createDevice(parent,name,input,output){if(typeof parent!="string"){throw new Error("Only string paths are accepted")}var path=PATH.join2(parent,name);var mode=FS_getMode(!!input,!!output);FS.createDevice.major??=64;var dev=FS.makedev(FS.createDevice.major++,0);FS.registerDevice(dev,{read(stream,buffer,offset,length,pos){var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=input();}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result;}return bytesRead},write(stream,buffer,offset,length,pos){for(var i=0;i<length;i++){try{output(buffer[offset+i]);}catch(e){throw new FS.ErrnoError(29)}}return i}});return FS.mkdev(path,mode,dev)},mkdev(path,mode,dev){if(typeof dev==="undefined"){dev=mode;mode=438;}var deviceBackend=wasmFSDevices[dev];if(!deviceBackend){throw new Error("Invalid device ID.")}return FS.handleError(withStackSave(()=>_wasmfs_create_file(stringToUTF8OnStack(path),mode,deviceBackend)))},rename(oldPath,newPath){return FS.handleError(withStackSave(()=>{var oldPathBuffer=stringToUTF8OnStack(oldPath);var newPathBuffer=stringToUTF8OnStack(newPath);return __wasmfs_rename(oldPathBuffer,newPathBuffer)}))},llseek(stream,offset,whence){return FS.handleError(__wasmfs_llseek(stream.fd,BigInt(offset),whence))}};var FS_createPath=FS.createPath;init_ClassHandle();init_RegisteredPointer();{if(Module["noExitRuntime"])noExitRuntime=Module["noExitRuntime"];if(Module["preloadPlugins"])preloadPlugins=Module["preloadPlugins"];if(Module["print"])out=Module["print"];if(Module["printErr"])err=Module["printErr"];if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];if(Module["arguments"])Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].shift()();}}}Module["ENV"]=ENV;Module["addRunDependency"]=addRunDependency;Module["removeRunDependency"]=removeRunDependency;Module["FS_preloadFile"]=FS_preloadFile;Module["FS_unlink"]=FS_unlink;Module["FS_createPath"]=FS_createPath;Module["FS"]=FS;Module["FS_createDataFile"]=FS_createDataFile;var ___getTypeName,_malloc,_free,_emscripten_stack_get_current,__emscripten_timeout,___trap,__emscripten_stack_restore,__emscripten_stack_alloc,__wasmfs_read_file,__wasmfs_write_file,__wasmfs_mkdir,__wasmfs_rmdir,__wasmfs_open,__wasmfs_mknod,__wasmfs_unlink,__wasmfs_chdir,__wasmfs_symlink,__wasmfs_readlink,__wasmfs_write,__wasmfs_pwrite,__wasmfs_chmod,__wasmfs_fchmod,__wasmfs_lchmod,__wasmfs_llseek,__wasmfs_rename,__wasmfs_read,__wasmfs_pread,__wasmfs_truncate,__wasmfs_ftruncate,__wasmfs_close,__wasmfs_mmap,__wasmfs_msync,__wasmfs_munmap,__wasmfs_utime,__wasmfs_stat,__wasmfs_lstat,__wasmfs_mount,__wasmfs_identify,__wasmfs_readdir_start,__wasmfs_readdir_get,__wasmfs_readdir_finish,__wasmfs_get_cwd,_wasmfs_create_jsimpl_backend,__wasmfs_opfs_record_entry,_wasmfs_create_file,_wasmfs_unmount,wasmMemory,wasmTable;function assignWasmExports(wasmExports){___getTypeName=wasmExports["ra"];_malloc=wasmExports["ua"];_free=wasmExports["va"];_emscripten_stack_get_current=wasmExports["wa"];__emscripten_timeout=wasmExports["xa"];___trap=wasmExports["ya"];__emscripten_stack_restore=wasmExports["za"];__emscripten_stack_alloc=wasmExports["Aa"];__wasmfs_read_file=wasmExports["Ba"];__wasmfs_write_file=wasmExports["Ca"];__wasmfs_mkdir=wasmExports["Da"];__wasmfs_rmdir=wasmExports["Ea"];__wasmfs_open=wasmExports["Fa"];__wasmfs_mknod=wasmExports["Ga"];__wasmfs_unlink=wasmExports["Ha"];__wasmfs_chdir=wasmExports["Ia"];__wasmfs_symlink=wasmExports["Ja"];__wasmfs_readlink=wasmExports["Ka"];__wasmfs_write=wasmExports["La"];__wasmfs_pwrite=wasmExports["Ma"];__wasmfs_chmod=wasmExports["Na"];__wasmfs_fchmod=wasmExports["Oa"];__wasmfs_lchmod=wasmExports["Pa"];__wasmfs_llseek=wasmExports["Qa"];__wasmfs_rename=wasmExports["Ra"];__wasmfs_read=wasmExports["Sa"];__wasmfs_pread=wasmExports["Ta"];__wasmfs_truncate=wasmExports["Ua"];__wasmfs_ftruncate=wasmExports["Va"];__wasmfs_close=wasmExports["Wa"];__wasmfs_mmap=wasmExports["Xa"];__wasmfs_msync=wasmExports["Ya"];__wasmfs_munmap=wasmExports["Za"];__wasmfs_utime=wasmExports["_a"];__wasmfs_stat=wasmExports["$a"];__wasmfs_lstat=wasmExports["ab"];__wasmfs_mount=wasmExports["bb"];__wasmfs_identify=wasmExports["cb"];__wasmfs_readdir_start=wasmExports["db"];__wasmfs_readdir_get=wasmExports["eb"];__wasmfs_readdir_finish=wasmExports["fb"];__wasmfs_get_cwd=wasmExports["gb"];_wasmfs_create_jsimpl_backend=wasmExports["hb"];__wasmfs_opfs_record_entry=wasmExports["ib"];_wasmfs_create_file=wasmExports["jb"];_wasmfs_unmount=wasmExports["kb"];wasmMemory=wasmExports["pa"];Module["_cppjs_empty_source_marker"]=wasmExports["sa"].value;wasmTable=wasmExports["ta"];}var wasmImports={ea:___call_sighandler,ja:__abort_js,p:__embind_register_bigint,V:__embind_register_bool,e:__embind_register_class,d:__embind_register_class_constructor,a:__embind_register_class_function,oa:__embind_register_emval,n:__embind_register_float,v:__embind_register_function,g:__embind_register_integer,k:__embind_register_iterable,c:__embind_register_memory_view,f:__embind_register_optional,w:__embind_register_std_string,m:__embind_register_std_wstring,da:__embind_register_void,ga:__emscripten_get_progname,fa:__emscripten_runtime_keepalive_clear,j:__emval_create_invoker,i:__emval_invoke,h:__emval_run_destructors,ca:__setitimer_js,ka:__tzset_js,$:__wasmfs_copy_preloaded_file_data,B:__wasmfs_get_num_preloaded_dirs,C:__wasmfs_get_num_preloaded_files,z:__wasmfs_get_preloaded_child_path,x:__wasmfs_get_preloaded_file_mode,aa:__wasmfs_get_preloaded_file_size,A:__wasmfs_get_preloaded_parent_path,y:__wasmfs_get_preloaded_path_name,_:__wasmfs_jsimpl_alloc_file,u:__wasmfs_jsimpl_free_file,Z:__wasmfs_jsimpl_get_size,Y:__wasmfs_jsimpl_read,W:__wasmfs_jsimpl_set_size,X:__wasmfs_jsimpl_write,K:__wasmfs_opfs_close_access,q:__wasmfs_opfs_close_blob,E:__wasmfs_opfs_flush_access,s:__wasmfs_opfs_free_directory,o:__wasmfs_opfs_free_file,T:__wasmfs_opfs_get_child,P:__wasmfs_opfs_get_entries,O:__wasmfs_opfs_get_size_access,N:__wasmfs_opfs_get_size_blob,M:__wasmfs_opfs_get_size_file,U:__wasmfs_opfs_init_root_directory,R:__wasmfs_opfs_insert_directory,S:__wasmfs_opfs_insert_file,t:__wasmfs_opfs_move_file,r:__wasmfs_opfs_open_access,L:__wasmfs_opfs_open_blob,I:__wasmfs_opfs_read_access,J:__wasmfs_opfs_read_blob,Q:__wasmfs_opfs_remove_child,F:__wasmfs_opfs_set_size_access,G:__wasmfs_opfs_set_size_file,H:__wasmfs_opfs_write_access,D:__wasmfs_stdin_get_char,b:_emscripten_date_now,l:_emscripten_err,ia:_emscripten_out,ba:_emscripten_resize_heap,la:_environ_get,ma:_environ_sizes_get,na:_proc_exit,ha:_random_get};function run(){if(runDependencies>0){dependenciesFulfilled=run;return}preRun();if(runDependencies>0){dependenciesFulfilled=run;return}function doRun(){Module["calledRun"]=true;if(ABORT)return;initRuntime();readyPromiseResolve?.(Module);Module["onRuntimeInitialized"]?.();postRun();}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(()=>{setTimeout(()=>Module["setStatus"](""),1);doRun();},1);}else {doRun();}}var wasmExports;wasmExports=await (createWasm());run();if(runtimeInitialized){moduleRtn=Module;}else {moduleRtn=new Promise((resolve,reject)=>{readyPromiseResolve=resolve;readyPromiseReject=reject;});}
	return moduleRtn}})();{module.exports=Module2;module.exports.default=Module2;} 
		} (averagemaipupersonCppAppWasmWasm32StRelease_browser));
		return averagemaipupersonCppAppWasmWasm32StRelease_browser.exports;
	}

	var averagemaipupersonCppAppWasmWasm32StRelease_browserExports = requireAveragemaipupersonCppAppWasmWasm32StRelease_browser();
	var Module = /*@__PURE__*/getDefaultExportFromCjs(averagemaipupersonCppAppWasmWasm32StRelease_browserExports);

	var systemConfig = {
	        env: {},
	        useWorker: !!globalThis.Worker,
	        general: {
	            name: 'averagemaipuperson-cpp-app',
	        },
	        fs: {
	            opfs: false,
	        },
	        paths: {
	            wasm: 'averagemaipuperson-cpp-app-wasm-wasm32-st-release.browser.wasm',
	            data: 'averagemaipuperson-cpp-app-wasm-wasm32-st-release.browser.data.txt',
	            worker: 'averagemaipuperson-cpp-app-wasm-wasm32-st-release.browser.js',
	            js: 'averagemaipuperson-cpp-app-wasm-wasm32-st-release.browser.js',
	        }
	    };

	/* eslint-disable no-restricted-syntax, guard-for-in */

	function isObject$1(item) {
	    return (item && typeof item === 'object' && !Array.isArray(item));
	}

	function mergeDeep(target, ...sources) {
	    if (!sources.length) return target;
	    const source = sources.shift();

	    if (isObject$1(target) && isObject$1(source)) {
	        for (const key in source) {
	            if (isObject$1(source[key])) {
	                if (!target[key]) Object.assign(target, { [key]: {} });
	                mergeDeep(target[key], source[key]);
	            } else {
	                Object.assign(target, { [key]: source[key] });
	            }
	        }
	    }

	    return mergeDeep(target, ...sources);
	}

	function composeAdapters(adapters) {
	    const composed = {};
	    const extendFns = [];
	    const readyFns = [];
	    for (const a of adapters) {
	        if (!a) continue;
	        if (a.getDefaultPathPrefix) composed.getDefaultPathPrefix = a.getDefaultPathPrefix;
	        if (a.getDataPath) composed.getDataPath = a.getDataPath;
	        if (a.finalizePath) composed.finalizePath = a.finalizePath;
	        if (a.extendModule) extendFns.push(a.extendModule);
	        if (a.onModuleReady) readyFns.push(a.onModuleReady);
	    }
	    if (extendFns.length) {
	        composed.extendModule = (m, config) => extendFns.forEach((fn) => fn(m, config));
	    }
	    if (readyFns.length) {
	        composed.onModuleReady = (m, config) => readyFns.forEach((fn) => fn(m, config));
	    }
	    return composed;
	}

	function buildLocateFile(config, adapter) {
	    return function locateFile(fileName) {
	        let path = fileName;
	        if (config.paths && config.paths.wasm && fileName.endsWith('.wasm')) {
	            path = config.paths.wasm;
	        } else if (config.paths && config.paths.data && (fileName.endsWith('.data.txt') || fileName.endsWith('.data'))) {
	            path = config.paths.data;
	        }

	        let prefix = '';
	        if (config.path) {
	            prefix = config.path;
	            if (prefix.slice(-1) !== '/') prefix += '/';
	        } else if (adapter.getDefaultPathPrefix) {
	            prefix = adapter.getDefaultPathPrefix();
	        }

	        let output = prefix + path;
	        if (output.endsWith('.data')) output += '.txt';
	        if (adapter.finalizePath) output = adapter.finalizePath(output);

	        return output;
	    };
	}

	function createBaseModule(Module, config, adapter) {
	    return new Promise((resolve, reject) => {
	        const locateFile = buildLocateFile(config, adapter);
	        const dataPath = adapter.getDataPath ? adapter.getDataPath() : '/cppjs';

	        const m = {
	            print(text) {
	                if (config.logHandler) {
	                    config.logHandler(text, 'stdout');
	                } else {
	                    console.debug(`wasm stdout: ${text}`);
	                }
	            },
	            printErr(text) {
	                if (config.errorHandler) {
	                    config.errorHandler(text, 'stderr');
	                } else {
	                    console.error(`wasm stderr: ${text}`);
	                }
	            },
	            locateFile,
	            preRun: [
	                ({ ENV }) => {
	                    if (ENV && config && config.env) {
	                        Object.entries(config.env).forEach(([key, value]) => {
	                            ENV[key] = value?.replace('_CPPJS_DATA_PATH_', dataPath);
	                        });
	                    }
	                },
	            ],
	            onRuntimeInitialized() {
	                if (adapter.onModuleReady) adapter.onModuleReady(m, config);
	                if (config.onRuntimeInitialized) config.onRuntimeInitialized(m);
	            },
	            unmount() {},
	            toArray(vector) {
	                if (Array.isArray(vector)) return vector;
	                const len = vector.size();
	                const output = new Array(len);
	                for (let i = 0; i < len; i += 1) {
	                    output[i] = vector.get(i);
	                }
	                return output;
	            },
	            toVector(classOrName, array = []) {
	                const VectorClass = typeof classOrName === 'string' ? m[classOrName] : classOrName;
	                const vector = new VectorClass();
	                array.forEach((item) => {
	                    vector.push_back(item);
	                });
	                return vector;
	            },
	        };

	        if (adapter.extendModule) adapter.extendModule(m, config);

	        if (config.getWasmFunction) {
	            m.instantiateWasm = function instantiateWasm(info, receive) {
	                const instance = new WebAssembly.Instance(config.getWasmFunction(), info);
	                receive(instance);
	                return instance.exports;
	            };
	        }

	        Module(m).then(resolve).catch(reject);
	    });
	}

	function createInitCppJs({
	    Module, systemConfig, adapter, worker,
	}) {
	    let cppJsPromise;

	    function createModule(config) {
	        return createBaseModule(Module, config, adapter);
	    }

	    if (worker && worker.isWorkerScope) {
	        worker.exposeWorker(systemConfig, createModule);
	    }

	    function initCppJs(userConfig = {}) {
	        if (cppJsPromise) return cppJsPromise;

	        const config = mergeDeep(systemConfig, userConfig);

	        if (worker && config.useWorker && !worker.isWorkerScope) {
	            cppJsPromise = worker.initWithWorker(config, userConfig);
	        } else {
	            cppJsPromise = createModule(config);
	        }

	        return cppJsPromise;
	    }

	    initCppJs.terminate = function terminate() {
	        if (worker && worker.terminate) worker.terminate();
	        cppJsPromise = null;
	    };

	    if (typeof globalThis === 'object') {
	        globalThis.CppJs = { initCppJs };
	    }

	    return initCppJs;
	}

	var urlPath = {
	    finalizePath(output) {
	        if (output.substring(0, 4) !== 'http' && output[0] !== '/') {
	            return `/${output}`;
	        }
	        return output;
	    },
	};

	/**
	 * @license
	 * Copyright 2019 Google LLC
	 * SPDX-License-Identifier: Apache-2.0
	 */
	const proxyMarker = Symbol("Comlink.proxy");
	const createEndpoint = Symbol("Comlink.endpoint");
	const releaseProxy = Symbol("Comlink.releaseProxy");
	const finalizer = Symbol("Comlink.finalizer");
	const throwMarker = Symbol("Comlink.thrown");
	const isObject = (val) => (typeof val === "object" && val !== null) || typeof val === "function";
	/**
	 * Internal transfer handle to handle objects marked to proxy.
	 */
	const proxyTransferHandler = {
	    canHandle: (val) => isObject(val) && val[proxyMarker],
	    serialize(obj) {
	        const { port1, port2 } = new MessageChannel();
	        expose(obj, port1);
	        return [port2, [port2]];
	    },
	    deserialize(port) {
	        port.start();
	        return wrap(port);
	    },
	};
	/**
	 * Internal transfer handler to handle thrown exceptions.
	 */
	const throwTransferHandler = {
	    canHandle: (value) => isObject(value) && throwMarker in value,
	    serialize({ value }) {
	        let serialized;
	        if (value instanceof Error) {
	            serialized = {
	                isError: true,
	                value: {
	                    message: value.message,
	                    name: value.name,
	                    stack: value.stack,
	                },
	            };
	        }
	        else {
	            serialized = { isError: false, value };
	        }
	        return [serialized, []];
	    },
	    deserialize(serialized) {
	        if (serialized.isError) {
	            throw Object.assign(new Error(serialized.value.message), serialized.value);
	        }
	        throw serialized.value;
	    },
	};
	/**
	 * Allows customizing the serialization of certain values.
	 */
	const transferHandlers = new Map([
	    ["proxy", proxyTransferHandler],
	    ["throw", throwTransferHandler],
	]);
	function isAllowedOrigin(allowedOrigins, origin) {
	    for (const allowedOrigin of allowedOrigins) {
	        if (origin === allowedOrigin || allowedOrigin === "*") {
	            return true;
	        }
	        if (allowedOrigin instanceof RegExp && allowedOrigin.test(origin)) {
	            return true;
	        }
	    }
	    return false;
	}
	function expose(obj, ep = globalThis, allowedOrigins = ["*"]) {
	    ep.addEventListener("message", function callback(ev) {
	        if (!ev || !ev.data) {
	            return;
	        }
	        if (!isAllowedOrigin(allowedOrigins, ev.origin)) {
	            console.warn(`Invalid origin '${ev.origin}' for comlink proxy`);
	            return;
	        }
	        const { id, type, path } = Object.assign({ path: [] }, ev.data);
	        const argumentList = (ev.data.argumentList || []).map(fromWireValue);
	        let returnValue;
	        try {
	            const parent = path.slice(0, -1).reduce((obj, prop) => obj[prop], obj);
	            const rawValue = path.reduce((obj, prop) => obj[prop], obj);
	            switch (type) {
	                case "GET" /* MessageType.GET */:
	                    {
	                        returnValue = rawValue;
	                    }
	                    break;
	                case "SET" /* MessageType.SET */:
	                    {
	                        parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);
	                        returnValue = true;
	                    }
	                    break;
	                case "APPLY" /* MessageType.APPLY */:
	                    {
	                        returnValue = rawValue.apply(parent, argumentList);
	                    }
	                    break;
	                case "CONSTRUCT" /* MessageType.CONSTRUCT */:
	                    {
	                        const value = new rawValue(...argumentList);
	                        returnValue = proxy(value);
	                    }
	                    break;
	                case "ENDPOINT" /* MessageType.ENDPOINT */:
	                    {
	                        const { port1, port2 } = new MessageChannel();
	                        expose(obj, port2);
	                        returnValue = transfer(port1, [port1]);
	                    }
	                    break;
	                case "RELEASE" /* MessageType.RELEASE */:
	                    {
	                        returnValue = undefined;
	                    }
	                    break;
	                default:
	                    return;
	            }
	        }
	        catch (value) {
	            returnValue = { value, [throwMarker]: 0 };
	        }
	        Promise.resolve(returnValue)
	            .catch((value) => {
	            return { value, [throwMarker]: 0 };
	        })
	            .then((returnValue) => {
	            const [wireValue, transferables] = toWireValue(returnValue);
	            ep.postMessage(Object.assign(Object.assign({}, wireValue), { id }), transferables);
	            if (type === "RELEASE" /* MessageType.RELEASE */) {
	                // detach and deactive after sending release response above.
	                ep.removeEventListener("message", callback);
	                closeEndPoint(ep);
	                if (finalizer in obj && typeof obj[finalizer] === "function") {
	                    obj[finalizer]();
	                }
	            }
	        })
	            .catch((error) => {
	            // Send Serialization Error To Caller
	            const [wireValue, transferables] = toWireValue({
	                value: new TypeError("Unserializable return value"),
	                [throwMarker]: 0,
	            });
	            ep.postMessage(Object.assign(Object.assign({}, wireValue), { id }), transferables);
	        });
	    });
	    if (ep.start) {
	        ep.start();
	    }
	}
	function isMessagePort(endpoint) {
	    return endpoint.constructor.name === "MessagePort";
	}
	function closeEndPoint(endpoint) {
	    if (isMessagePort(endpoint))
	        endpoint.close();
	}
	function wrap(ep, target) {
	    const pendingListeners = new Map();
	    ep.addEventListener("message", function handleMessage(ev) {
	        const { data } = ev;
	        if (!data || !data.id) {
	            return;
	        }
	        const resolver = pendingListeners.get(data.id);
	        if (!resolver) {
	            return;
	        }
	        try {
	            resolver(data);
	        }
	        finally {
	            pendingListeners.delete(data.id);
	        }
	    });
	    return createProxy(ep, pendingListeners, [], target);
	}
	function throwIfProxyReleased(isReleased) {
	    if (isReleased) {
	        throw new Error("Proxy has been released and is not useable");
	    }
	}
	function releaseEndpoint(ep) {
	    return requestResponseMessage(ep, new Map(), {
	        type: "RELEASE" /* MessageType.RELEASE */,
	    }).then(() => {
	        closeEndPoint(ep);
	    });
	}
	const proxyCounter = new WeakMap();
	const proxyFinalizers = "FinalizationRegistry" in globalThis &&
	    new FinalizationRegistry((ep) => {
	        const newCount = (proxyCounter.get(ep) || 0) - 1;
	        proxyCounter.set(ep, newCount);
	        if (newCount === 0) {
	            releaseEndpoint(ep);
	        }
	    });
	function registerProxy(proxy, ep) {
	    const newCount = (proxyCounter.get(ep) || 0) + 1;
	    proxyCounter.set(ep, newCount);
	    if (proxyFinalizers) {
	        proxyFinalizers.register(proxy, ep, proxy);
	    }
	}
	function unregisterProxy(proxy) {
	    if (proxyFinalizers) {
	        proxyFinalizers.unregister(proxy);
	    }
	}
	function createProxy(ep, pendingListeners, path = [], target = function () { }) {
	    let isProxyReleased = false;
	    const proxy = new Proxy(target, {
	        get(_target, prop) {
	            throwIfProxyReleased(isProxyReleased);
	            if (prop === releaseProxy) {
	                return () => {
	                    unregisterProxy(proxy);
	                    releaseEndpoint(ep);
	                    pendingListeners.clear();
	                    isProxyReleased = true;
	                };
	            }
	            if (prop === "then") {
	                if (path.length === 0) {
	                    return { then: () => proxy };
	                }
	                const r = requestResponseMessage(ep, pendingListeners, {
	                    type: "GET" /* MessageType.GET */,
	                    path: path.map((p) => p.toString()),
	                }).then(fromWireValue);
	                return r.then.bind(r);
	            }
	            return createProxy(ep, pendingListeners, [...path, prop]);
	        },
	        set(_target, prop, rawValue) {
	            throwIfProxyReleased(isProxyReleased);
	            // FIXME: ES6 Proxy Handler `set` methods are supposed to return a
	            // boolean. To show good will, we return true asynchronously ¯\_(ツ)_/¯
	            const [value, transferables] = toWireValue(rawValue);
	            return requestResponseMessage(ep, pendingListeners, {
	                type: "SET" /* MessageType.SET */,
	                path: [...path, prop].map((p) => p.toString()),
	                value,
	            }, transferables).then(fromWireValue);
	        },
	        apply(_target, _thisArg, rawArgumentList) {
	            throwIfProxyReleased(isProxyReleased);
	            const last = path[path.length - 1];
	            if (last === createEndpoint) {
	                return requestResponseMessage(ep, pendingListeners, {
	                    type: "ENDPOINT" /* MessageType.ENDPOINT */,
	                }).then(fromWireValue);
	            }
	            // We just pretend that `bind()` didn’t happen.
	            if (last === "bind") {
	                return createProxy(ep, pendingListeners, path.slice(0, -1));
	            }
	            const [argumentList, transferables] = processArguments(rawArgumentList);
	            return requestResponseMessage(ep, pendingListeners, {
	                type: "APPLY" /* MessageType.APPLY */,
	                path: path.map((p) => p.toString()),
	                argumentList,
	            }, transferables).then(fromWireValue);
	        },
	        construct(_target, rawArgumentList) {
	            throwIfProxyReleased(isProxyReleased);
	            const [argumentList, transferables] = processArguments(rawArgumentList);
	            return requestResponseMessage(ep, pendingListeners, {
	                type: "CONSTRUCT" /* MessageType.CONSTRUCT */,
	                path: path.map((p) => p.toString()),
	                argumentList,
	            }, transferables).then(fromWireValue);
	        },
	    });
	    registerProxy(proxy, ep);
	    return proxy;
	}
	function myFlat(arr) {
	    return Array.prototype.concat.apply([], arr);
	}
	function processArguments(argumentList) {
	    const processed = argumentList.map(toWireValue);
	    return [processed.map((v) => v[0]), myFlat(processed.map((v) => v[1]))];
	}
	const transferCache = new WeakMap();
	function transfer(obj, transfers) {
	    transferCache.set(obj, transfers);
	    return obj;
	}
	function proxy(obj) {
	    return Object.assign(obj, { [proxyMarker]: true });
	}
	function toWireValue(value) {
	    for (const [name, handler] of transferHandlers) {
	        if (handler.canHandle(value)) {
	            const [serializedValue, transferables] = handler.serialize(value);
	            return [
	                {
	                    type: "HANDLER" /* WireValueType.HANDLER */,
	                    name,
	                    value: serializedValue,
	                },
	                transferables,
	            ];
	        }
	    }
	    return [
	        {
	            type: "RAW" /* WireValueType.RAW */,
	            value,
	        },
	        transferCache.get(value) || [],
	    ];
	}
	function fromWireValue(value) {
	    switch (value.type) {
	        case "HANDLER" /* WireValueType.HANDLER */:
	            return transferHandlers.get(value.name).deserialize(value.value);
	        case "RAW" /* WireValueType.RAW */:
	            return value.value;
	    }
	}
	function requestResponseMessage(ep, pendingListeners, msg, transfers) {
	    return new Promise((resolve) => {
	        const id = generateUUID();
	        pendingListeners.set(id, resolve);
	        if (ep.start) {
	            ep.start();
	        }
	        ep.postMessage(Object.assign({ id }, msg), transfers);
	    });
	}
	function generateUUID() {
	    return new Array(4)
	        .fill(0)
	        .map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16))
	        .join("-");
	}

	/* eslint-disable no-restricted-syntax, no-await-in-loop, no-constant-condition */

	const STATIC_PATHS = {
	    opfs: '/opfs',
	    memfs: '/memfs',
	};

	const isWorkerScope$1 = typeof WorkerGlobalScope !== 'undefined'
	    && typeof self !== 'undefined'
	    && self instanceof WorkerGlobalScope;

	const isBrowserSupportOPFS = typeof navigator !== 'undefined'
	    && navigator.storage
	    && navigator.storage.getDirectory;

	var browserFs = {
	    extendModule(m, config) {
	        m.mainScriptUrlOrBlob = m.locateFile(config.paths.worker);

	        m.getDefaultPath = () => STATIC_PATHS[config.fs?.opfs !== false ? 'opfs' : 'memfs'];

	        m.getFinalPath = function getFinalPath(path) {
	            let returnPath = path;
	            if (!path.startsWith('/')) {
	                throw new Error(`Path ${path} does not start with /`);
	            }

	            const opfsConfigured = config.fs?.opfs !== false;

	            let backend;
	            Object.entries(STATIC_PATHS).forEach(([key, value]) => {
	                if (path.startsWith(value)) {
	                    backend = key;
	                }
	            });
	            if (!backend) {
	                throw new Error(`Path ${path} does not start with any of the static paths: ${Object.values(STATIC_PATHS).join(', ')}`);
	            }
	            if (backend === 'opfs' && !opfsConfigured) {
	                throw new Error(`Path ${path} starts with ${STATIC_PATHS.opfs} but OPFS is disabled. Enable fs.opfs in config to mount under ${STATIC_PATHS.opfs}/.`);
	            }
	            if (backend === 'opfs' && !isWorkerScope$1) {
	                throw new Error(`Path ${path} starts with ${STATIC_PATHS.opfs} but OPFS is only available inside a Worker scope. Enable useWorker or mount under ${STATIC_PATHS.memfs}/ instead. Falling back to ${STATIC_PATHS.memfs}/.`);
	            }
	            if (backend === 'opfs' && !isBrowserSupportOPFS) {
	                console.error(`Path ${path} starts with ${STATIC_PATHS.opfs} but OPFS is not supported in this browser. Falling back to ${STATIC_PATHS.memfs}/.`);
	                returnPath = returnPath.replace(STATIC_PATHS.opfs, STATIC_PATHS.memfs);
	            }

	            return returnPath;
	        };

	        m.getRandomPath = function getRandomPath(startPath = m.getDefaultPath()) {
	            const appName = config.general?.name;
	            const rand = Math.floor(Math.random() * 1000000);
	            const path = m.getFinalPath(`${startPath}/${appName}/automounted/${rand}`);
	            m.FS.mkdirTree(path);
	            return path;
	        };

	        m.autoMountFiles = function autoMountFiles(files, parentPath = null) {
	            return new Promise((resolve, reject) => {
	                if (files.length === 0) {
	                    resolve([]);
	                    return;
	                }

	                const mountPath = parentPath ? m.getFinalPath(parentPath) : m.getRandomPath();
	                m.FS.mkdirTree(mountPath);

	                (async () => {
	                    try {
	                        const paths = [];
	                        for (const f of files) {
	                            const filePath = `${mountPath}/${f.name}`;
	                            const stream = m.FS.open(filePath, 'w');
	                            const reader = f.stream().getReader();
	                            let offset = 0;

	                            while (true) {
	                                const { done, value } = await reader.read();
	                                if (done) break;
	                                m.FS.write(stream, value, 0, value.length, offset);
	                                offset += value.length;
	                            }

	                            m.FS.close(stream);
	                            paths.push(filePath);
	                        }
	                        resolve(paths);
	                    } catch (e) {
	                        reject(e);
	                    }
	                })();
	            });
	        };

	        m.getFileBytes = function getFileBytes(path) {
	            if (!path) return new Uint8Array();
	            return m.FS.readFile(path, { encoding: 'binary' });
	        };

	        m.getFileList = function getFileList(path = m.getDefaultPath()) {
	            const fileList = [];
	            for (const name of m.FS.readdir(path)) {
	                if (name === '.' || name === '..') continue;
	                const fullPath = path === '/' ? `/${name}` : `${path}/${name}`;
	                const stat = m.FS.stat(fullPath);
	                const type = stat.mode & 0o170000;
	                if (type === 0o040000) {
	                    fileList.push(...m.getFileList(fullPath));
	                } else if (type === 0o100000) {
	                    fileList.push({ path: fullPath, size: stat.size });
	                }
	            }
	            return fileList;
	        };

	        m._createVector = function _createVector(className, array = []) {
	            const vector = m.toVector(className, array);
	            return proxy(vector);
	        };
	    },

	    onModuleReady(m, config) {
	        const appName = config.general?.name;
	        try {
	            m.FS.mkdirTree(`${STATIC_PATHS.memfs}/${appName}/automounted`);
	        } catch (e) {
	            console.error(e);
	        }

	        if (isWorkerScope$1 && isBrowserSupportOPFS && config.fs?.opfs !== false && typeof m.cppjs_init_opfs === 'function') {
	            m.cppjs_init_opfs();
	            if (appName) {
	                const appDir = `${STATIC_PATHS.opfs}/${appName}/automounted`;
	                try {
	                    m.FS.mkdirTree(appDir);
	                } catch (e) {
	                    console.error(e);
	                }
	            }
	        }
	    },
	};

	const isWorkerScope = typeof WorkerGlobalScope !== 'undefined'
	    && typeof self !== 'undefined'
	    && self instanceof WorkerGlobalScope;

	// === Embind <-> Comlink Bridge ===
	// Worker-side registry: id -> original embind object
	// Main-thread registry: Comlink proxy -> id
	const embindRegistry = new Map();
	const embindProxyIds = new WeakMap();
	let nextEmbindId = 1;

	function registerEmbindObject(obj) {
	    const id = nextEmbindId++;
	    embindRegistry.set(id, obj);
	    return id;
	}

	// Reorder transfer handlers for correct priority
	const _proxyHandler = transferHandlers.get('proxy');
	const _throwHandler = transferHandlers.get('throw');
	transferHandlers.clear();

	// 1. embindProxy: when a proxied embind object is sent back as an argument,
	//    resolve it to the original object on the worker instead of creating a proxy-of-proxy
	transferHandlers.set('embindProxy', {
	    canHandle(obj) {
	        return embindProxyIds.has(obj);
	    },
	    serialize(obj) {
	        return [embindProxyIds.get(obj), []];
	    },
	    deserialize(id) {
	        return embindRegistry.get(id);
	    },
	});

	// 2. proxy (modified): also registers embind objects created via CONSTRUCT
	transferHandlers.set('proxy', {
	    canHandle: _proxyHandler.canHandle,
	    serialize(obj) {
	        const [port, transferables] = _proxyHandler.serialize(obj);
	        if (typeof obj.delete === 'function' && typeof obj.isDeleted === 'function') {
	            const id = registerEmbindObject(obj);
	            return [{ __embindId: id, __port: port }, transferables];
	        }
	        return [port, transferables];
	    },
	    deserialize(data) {
	        if (data != null && typeof data === 'object' && '__embindId' in data) {
	            const proxy = _proxyHandler.deserialize(data.__port);
	            embindProxyIds.set(proxy, data.__embindId);
	            return proxy;
	        }
	        return _proxyHandler.deserialize(data);
	    },
	});

	// 3. throw (restored)
	transferHandlers.set('throw', _throwHandler);

	// 4. embindVector: convert embind vectors to arrays across worker boundary
	transferHandlers.set('embindVector', {
	    canHandle(obj) {
	        return obj != null
	            && typeof obj === 'object'
	            && typeof obj.size === 'function'
	            && typeof obj.get === 'function'
	            && typeof obj.delete === 'function';
	    },
	    serialize(obj) {
	        const len = obj.size();
	        const elements = new Array(len);
	        let hasObjects = false;
	        for (let i = 0; i < len; i++) {
	            const elem = obj.get(i);
	            elements[i] = elem;
	            if (!hasObjects && elem !== null && typeof elem === 'object') {
	                hasObjects = true;
	            }
	        }
	        if (!hasObjects) {
	            return [elements, []];
	        }
	        const transferables = [];
	        for (let i = 0; i < len; i++) {
	            const elem = elements[i];
	            if (elem !== null && typeof elem === 'object') {
	                const id = registerEmbindObject(elem);
	                const { port1, port2 } = new MessageChannel();
	                expose(elem, port1);
	                transferables.push(port2);
	                elements[i] = { __comlinkProxy: true, __embindId: id, port: port2 };
	            }
	        }
	        return [elements, transferables];
	    },
	    deserialize(elements) {
	        return elements.map((elem) => {
	            if (elem && typeof elem === 'object' && elem.__comlinkProxy) {
	                elem.port.start();
	                const proxy = wrap(elem.port);
	                embindProxyIds.set(proxy, elem.__embindId);
	                return proxy;
	            }
	            return elem;
	        });
	    },
	});

	// 5. embindObject: proxy other embind objects (Dataset, etc.)
	transferHandlers.set('embindObject', {
	    canHandle(obj) {
	        return obj != null
	            && typeof obj === 'object'
	            && typeof obj.delete === 'function'
	            && typeof obj.isDeleted === 'function';
	    },
	    serialize(obj) {
	        const id = registerEmbindObject(obj);
	        const { port1, port2 } = new MessageChannel();
	        expose(obj, port1);
	        return [{ __embindId: id, port: port2 }, [port2]];
	    },
	    deserialize(data) {
	        data.port.start();
	        const proxy = wrap(data.port);
	        embindProxyIds.set(proxy, data.__embindId);
	        return proxy;
	    },
	});

	let _worker = null;

	function resolveScriptUrl(config) {
	    const fileName = config.paths.js || config.paths.worker;
	    let prefix = '';
	    if (config.path) {
	        prefix = config.path;
	        if (prefix.slice(-1) !== '/') prefix += '/';
	    }
	    let output = prefix + fileName;
	    if (output.substring(0, 4) !== 'http' && output[0] !== '/') output = `/${output}`;
	    return output;
	}

	function exposeWorker(systemConfig, createModule) {
	    const workerApi = {
	        async init(userConfig = {}) {
	            const config = mergeDeep(systemConfig, userConfig);
	            const m = await createModule(config);
	            return proxy(m);
	        },
	    };
	    expose(workerApi);
	}

	async function initWithWorker(config, userConfig) {
	    const scriptUrl = config.workerUrl || resolveScriptUrl(config);
	    _worker = new Worker(scriptUrl);
	    const workerApi = wrap(_worker);

	    const {
	        // eslint-disable-next-line no-unused-vars
	        logHandler, errorHandler, onRuntimeInitialized, getWasmFunction, useWorker, workerUrl,
	        ...serializableConfig
	    } = userConfig;
	    const module = await workerApi.init(serializableConfig);

	    return new Proxy(module, {
	        get(target, prop) {
	            if (prop === 'toArray') {
	                return function toArray(vector) {
	                    if (Array.isArray(vector)) return vector;
	                    return target.toArray(vector);
	                };
	            }
	            if (prop === 'toVector') {
	                return function toVector(classOrName, array = []) {
	                    if (typeof classOrName === 'string') {
	                        return target._createVector(classOrName, array);
	                    }
	                    return target.toVector(classOrName, array);
	                };
	            }
	            return target[prop];
	        },
	    });
	}

	function terminate() {
	    if (_worker) {
	        _worker.terminate();
	        _worker = null;
	    }
	}

	var workerComlink = {
	    isWorkerScope,
	    exposeWorker,
	    initWithWorker,
	    terminate,
	};

	/* eslint-disable import/no-unresolved */

	const adapter = composeAdapters([urlPath, browserFs]);

	var browser = createInitCppJs({
	    Module,
	    systemConfig,
	    adapter,
	    worker: workerComlink,
	});

	return browser;

}));
