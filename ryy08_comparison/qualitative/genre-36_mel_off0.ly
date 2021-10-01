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
        
        r4. g'16 ees''16 d''4 c''8. ges'16 | f'2~ f'16 a'4 ees''8 d'16 | e''8. e''4~ e''16 c''8 ges'16 g'8. a'8~ | a'4 b'2. | d'4~ d'16 bes'8 d''16 c''4 bes'16 g'8. | a'2~ a'16 f''8 a'8 d''16 c'16 des'16~ | des'16 f'4. c''16 b'16 c''8. bes'8. c''16
    }
}

>>

\version "2.18.2"