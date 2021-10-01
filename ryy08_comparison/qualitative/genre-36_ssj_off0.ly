#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*112
    }
}

\new Staff { 
    {
        \clef treble
        \key bes \major
        \time 4/4
        
        r4 g'16 g'8 ees''16 d''4~ d''8. g'16 | f'2~ f'4~ f'16 ees'8 d'16 | g'2 ges'8. g'8. a'8 | b'1~ | b'4 bes'16 bes'16 d''16 d''16 c''4 bes'4 | a'4~ a'16 c''16 d''16 e''4. d''16 c''16 aes'16~ | aes'4~ aes'8. c''16 c''2
    }
}

>>

\version "2.18.2"