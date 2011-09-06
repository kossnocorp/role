# -*- encoding: utf-8 -*-
$:.push File.expand_path('../lib', __FILE__)
require 'role-rails/version'

Gem::Specification.new do |s|
  s.name        = 'role-rails'
  s.version     = Role::Rails::VERSION
  s.authors     = ['Sasha Koss']
  s.email       = ['koss@nocorp.me']
  s.homepage    = ''
  s.summary     = 'jQuery plugin to provide easy way to handle DOM elements by role attribute'
  s.description = 'jQuery plugin to provide easy way to handle DOM elements by role attribute'

  s.rubyforge_project = 'role-rails'

  s.files         = `git ls-files`.split("\n")
  s.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.executables   = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  s.require_paths = ['lib']

  s.add_dependency 'rails', '>= 3.1.0'
end
