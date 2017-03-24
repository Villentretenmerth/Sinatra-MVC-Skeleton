require 'rubygems'
require 'bundler'

Bundler.require

#\ -s puma -o 0.0.0.0 -p 84 -E development
#\ -s puma -o 0.0.0.0 -p 84 -E production

require File.join(File.dirname(__FILE__), 'app.rb')
run App.new
