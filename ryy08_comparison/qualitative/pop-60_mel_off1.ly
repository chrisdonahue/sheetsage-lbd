#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*224
    }
}

\new Staff { 
    {
        \clef treble
        \key c \major
        \time 4/4
        
        a''8. r2~ r16 gis''16 a''8. | gis''4 a''4 r16 b''8. c'''8. r16~ | r1~ | r4 b'8 c''8 e''8 g''4 r8 | g''8 a''2~ a''16 gis''8 a''8 gis''16~ | gis''8. r16 e''8 r8 d''8. r16 c''4 | r1~ | r16 gis16 r4~ r8. a8. r8. a16 | r16 e''16 f''8 d'4. c''8. d'8 r16 | d'8. cis'16 d'4 r8 cis'8 b'8 r8~ | r8 f''8. d'16 e''8 d''4~ d''8. r16~ | r4 c''8. r16 cis''8 c''4 r8 | c'4 cis'8 r8 c'8. r8. ais8 | gis16 r16 cis'8 r8 c'4~ c'16 cis'16 d'8 r8
    }
}

>>

\version "2.18.2"