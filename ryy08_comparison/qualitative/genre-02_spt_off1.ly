#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*128
    }
}

\new Staff { 
    {
        \clef treble
        \key c \major
        \time 4/4
        
        d''16 e''4~ e''16 cis''16 d''8. b'8 r4 | e''16 f''4 r16 d''16 e''16 c''8. r16 d''16 e''16 r8 | d''16 c''16 c''8 dis''8 r16 c''8 r16 c''8 dis''8 c''16 r16 | c''16 r16 c''16 r2~ r16 dis''16 r16 c''16 c''16~ | c''16 r2~ r4~ r8.~ | r1~ | r1~ | r2. dis''16 dis''16 cis''8
    }
}

>>

\version "2.18.2"