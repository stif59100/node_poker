## jointure des joueurs inscrits aux manches
SELECT user.name_user,
       user.firstname_user,
       round_player.id_user,
       round.id_round,
       round_player.id_round_player,
       round.date_round,
       round.name_round
  FROM (poker.round_player round_player
        INNER JOIN poker.round round
           ON (round_player.id_round = round.id_round))
       INNER JOIN poker.user user ON (round_player.id_user = user.id_user);