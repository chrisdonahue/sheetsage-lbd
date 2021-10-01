#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*208
    }
}

\new Staff { 
    {
        \clef treble
        \key c \major
        \time 4/4
        
        a''4. r4. a''4 | gis''4 a''4 b''4 c'''4~ | c'''8. r2~ r4~ r16~ | r4 c''8. r16 e''8 g''4 r8 | g''8 a''2~ a''16 r16 gis''4~ | gis''8. r16 e''8 r8 d''8. r16 c''8 c''8~ | c''8. r2~ r4~ r16~ | r2~ r8 ais'8 b'8 a'16 r16 | f''4. e''8 c''2 | r2~ r8 a'8 c''8 a'16 r16~ | r8 f''4 e''8 d''4 d''4~ | d''8 r16 c''4~ c''16 d''8 c''4.~ | c''8 r2~ r4.
    }
}

>>

\version "2.18.2"