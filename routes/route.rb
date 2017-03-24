class App < Sinatra::Application

  get '/' do
    redirect '/main'
  end

  get '/main' do
    erb :main
  end

  get '/views/:view' do
    case params[:view]
    when 'icons'
      erb :icons, layout: false
    when 'menu'
      erb :menu, layout: false
    else
      erb :error_404, layout: false
    end
  end


  get '/all_icons' do
    Icons.all_icons.to_a.to_json
  end


  get '/*' do
    erb :main
  end

end