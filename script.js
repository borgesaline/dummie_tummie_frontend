$(document).ready(function(){
    $('#atualizar-tabela').click(function(){
        $.ajax({
            url: "arquivos/usuarios.txt",
            dataType: "text",
            contentType: "text/csv",
            success: function(data) {
                var usuarios = data.split(/\r?\n|\r/);
                var linha_tabela = '<table class="tabela-usuarios">'
                
                for (var count = 0; count < usuarios.length; count++) {
                    var cell_data = usuarios[count].split(",");
                    linha_tabela += '<tr>';

                    for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
                        if (count === 0) {
                            linha_tabela += '<th>' + cell_data[cell_count] + '</th>'; 
                        }
                        else {
                            linha_tabela += '<td>' + cell_data[cell_count] + '</td>'; 
                        }
                        
                    }

                    linha_tabela += '</tr>' 
                }

                linha_tabela += '</table>' 
                $('t-usuarios').html(linha_tabela)

            }
        });
    });
});