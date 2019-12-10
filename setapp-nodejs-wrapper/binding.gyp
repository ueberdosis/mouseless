{
  "targets": [
    {
      "target_name": "setapp",
      "sources": [
        "setapp-lib-mapping.mm"
      ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")",
        "./libSetapp/"
      ],
      "xcode_settings": {
        "OTHER_LDFLAGS": ["-force_load  <(module_root_dir)/libSetapp/libSetapp.a -framework Security -framework IOKit -framework QuartzCore -framework Cocoa"],
        'CLANG_CXX_LIBRARY': 'libc++',
        "MACOSX_DEPLOYMENT_TARGET":"10.10"
      }
    }
  ]
}
