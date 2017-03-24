require './config/init'

class App < Sinatra::Application

  configure do

    set logging: true

  end

  configure :development do

    set server: 'puma'
    set bind: '0.0.0.0'
    set port: 84

    use Rack::Session::EncryptedCookie,
        key: 'session',
        httponly: true,
        secure: false,
        secret: '6f4d0c5a9dec92e6c68293f5cdff5f76dae3c8fd498ad5815638c9d4487235bc'

  end

  configure :production do

    use Rack::Session::EncryptedCookie,
        key: 'session',
        httponly: true,
        secure: true,
        secret: '6f4d0c5a9dec92e6c68293f5cdff5f76dae3c8fd498ad5815638c9d4487235bc'

  end

  require_relative 'models/init'
  require_relative 'routes/init'

end