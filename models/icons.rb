module Icons

  def self.all_icons
    sql = { statement: 'SELECT * FROM ikony', value: [] }
    Tools.sql_query(sql)
  end



end
