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
        
        r4~ r16 g'8 ees''16 c''16 d''8. c''8. g'16 | f'2~ f'8 r4. | c'4 g'4 ges'8. g'8. a'8~ | a'8 r8. b'2 r8.~ | r4~ r16 bes'8 d''16 c''4 bes'4 | a'4~ a'16 c''16 d''16 e''16 f''4~ f''16 d''8 ges'16 | f'4. f'8 bes'16 c''8. bes'8. g'16
    }
}

>>

\version "2.18.2"