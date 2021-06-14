initSidebarItems({"constant":[["DEFAULT_CALL_STACK_LIMIT","Maximum number of levels on the call stack."],["DEFAULT_VALUE_STACK_LIMIT","Maximum number of bytes on the value stack."],["LINEAR_MEMORY_PAGE_SIZE","Size of a page of linear memory - 64KiB."]],"enum":[["Error","Internal interpreter error."],["ExternVal","An external value is the runtime representation of an entity that can be imported or exported."],["ResumableError","A resumable invocation error."],["RuntimeValue","Runtime representation of a value."],["TrapKind","Error type which can be thrown by wasm code or by host environment."],["ValueError","Error for `LittleEndianConvert`"],["ValueType","Type of a value."]],"mod":[["memory_units","WebAssembly-specific sizes and units."],["nan_preserving_float",""]],"struct":[["FuncInstance","Runtime representation of a function."],["FuncInvocation","A resumable invocation handle. This struct is returned by `FuncInstance::invoke_resumable`."],["FuncRef","Reference to a function (See `FuncInstance` for details)."],["GlobalDescriptor","Description of a global variable."],["GlobalInstance","Runtime representation of a global variable (or `global` for short)."],["GlobalRef","Reference to a global variable (See `GlobalInstance` for details)."],["ImportsBuilder","Convenience builder of `ImportResolver`."],["MemoryDescriptor","Description of a linear memory."],["MemoryInstance","Runtime representation of a linear memory (or `memory` for short)."],["MemoryRef","Reference to a memory (See `MemoryInstance` for details)."],["Module","Deserialized module prepared for instantiation."],["ModuleInstance","A module instance is the runtime representation of a module."],["ModuleRef","Reference to a `ModuleInstance`."],["NopExternals","Implementation of `Externals` that just traps on `invoke_index`."],["NotStartedModuleRef","Mostly instantiated `ModuleRef`."],["RuntimeArgs","Wrapper around slice of `RuntimeValue` for using it as an argument list conveniently."],["Signature","Signature of a function."],["StackRecycler","Used to recycle stacks instead of allocating them repeatedly."],["TableDescriptor","Description of a table."],["TableInstance","Runtime representation of a table."],["TableRef","Reference to a table (See `TableInstance` for details)."],["Trap","Error type which can be thrown by wasm code or by host environment."]],"trait":[["Externals","Trait that allows to implement host functions."],["FromRuntimeValue","Trait for creating value from a `RuntimeValue`."],["HostError","Trait that allows the host to return custom error."],["ImportResolver","Resolver of a module’s dependencies."],["LittleEndianConvert","Convert from and to little endian."],["ModuleImportResolver","Version of `ImportResolver` specialized for a single module."]]});